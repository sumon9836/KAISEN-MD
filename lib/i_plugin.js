const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const fetch = require('node-fetch');
const AdmZip = require('adm-zip');
const JavaScriptObfuscator = require('javascript-obfuscator');

async function rimraf(target) {
  if (!target) return;
  try {
    await fsp.rm(target, { recursive: true, force: true });
  } catch (e) {
    const rimrafRecursive = async dir => {
      if (!fs.existsSync(dir)) return;
      for (const entry of await fsp.readdir(dir)) {
        const curPath = path.join(dir, entry);
        const stat = await fsp.lstat(curPath);
        if (stat.isDirectory()) await rimrafRecursive(curPath);
        else await fsp.unlink(curPath);
      }
      await fsp.rmdir(dir);
    };
    await rimrafRecursive(target);
  }
}

async function copyDir(src, dest) {
  const entries = await fsp.readdir(src, { withFileTypes: true });
  await fsp.mkdir(dest, { recursive: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function listJsFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await listJsFiles(p, files);
    } else if (e.isFile() && p.endsWith('.js')) {
      files.push(p);
    }
  }
  return files;
}

async function obfuscateFile(filePath, options = {}) {
  const src = await fsp.readFile(filePath, 'utf8');
  const obfs = JavaScriptObfuscator.obfuscate(src, Object.assign({
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    stringArrayEncoding: ['rc4'],
    stringArray: true,
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false
  }, options));
  await fsp.writeFile(filePath, obfs.getObfuscatedCode(), 'utf8');
}

async function ensureDirectory(p) {
  await fsp.mkdir(p, { recursive: true });
}

async function installPlugins(opts = {}) {
  // default to repo zip
  const repoZip = opts.repoZip || 'https://github.com/sumon5984/plugins/archive/refs/heads/main.zip';
  const pluginsDir = path.resolve(opts.pluginsDir || path.join(process.cwd(), 'plugins'));
  const tmpBase = path.join(process.cwd(), `.tmp_plugins_${Date.now()}`);
  console.log("🪼 installing plugins");

  try {
    await ensureDirectory(tmpBase);

    // Download ZIP
    const res = await fetch(repoZip);
    if (!res.ok) throw new Error(`Failed to fetch repo: ${res.statusText}`);
    const buffer = await res.buffer();

    // Extract ZIP
    const zip = new AdmZip(buffer);
    zip.extractAllTo(tmpBase, true);

    // GitHub zips as <repo>-main
    let sourcePlugins = path.join(tmpBase, 'plugins-main', 'plugins');
    if (!fs.existsSync(sourcePlugins)) {
      sourcePlugins = path.join(tmpBase, 'plugins-main');
    }

    if (opts.clean) {
      await rimraf(pluginsDir);
    }
    await ensureDirectory(pluginsDir);
    await copyDir(sourcePlugins, pluginsDir);

    // Clean up git metadata if any
    try { await rimraf(path.join(pluginsDir, '.git')); } catch {}

    // Obfuscate JS files
    const jsFiles = await listJsFiles(pluginsDir);
    for (const f of jsFiles) {
      try {
        await obfuscateFile(f, opts.obfuscatorOptions || {});
      } catch (e) {
        console.error(`[i_plugin] failed to obfuscate ${f}:`, e);
      }
    }

    await rimraf(tmpBase);
    return { ok: true, files: jsFiles.length };
  } catch (err) {
    console.error('[i_plugin] installer error:', err);
    try { await rimraf(tmpBase); } catch {}
    return { ok: false, error: err };
  }
}

module.exports = async function runInstallerAuto(options = {}) {
  const res = await installPlugins(Object.assign({ clean: true }, options));
  return res;
};
module.exports.installPlugins = installPlugins;
