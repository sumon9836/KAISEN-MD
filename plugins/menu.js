//

const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🍓",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭══〘〘 ${config.BOT_NAME} 〙〙*
*┃❍ ʀᴜɴ : ${runtime(process.uptime())}*
*┃❍ ᴍᴏᴅᴇ* : *${config.MODE}*
*┃❍ ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃❍ ʀᴀᴍ* : *34.56 ɢʙ/60.79 ɢʙ*
*┃❍ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃❍ ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
*╰═════════════════⊷*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭────❒⁠⁠⁠⁠* *🍓 OWNER-CMD 🍓* *❒⁠⁠⁠⁠* 
*├◈ .ᴀʟʟᴠᴀʀ*
*├◈ .sᴇᴛᴛɪɴɢs*
*├◈ .ᴏᴡɴᴇʀ*
*├◈ .sᴛᴀᴛᴜs-ʀᴇᴘʟʏ*
*├◈ .ᴀᴜᴛᴏ-ʀᴇᴘʟʏ*
*├◈ .ᴀɴᴛɪ-ʙᴀᴅ*
*├◈ .ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ*
*├◈ .ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ*
*├◈ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├◈ .ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
*├◈ .sᴛᴀᴛᴜs-ʀᴇᴀᴄᴛ*
*├◈ .ᴀɴᴛɪ-ᴄᴀʟʟ*
*├◈ .ʀᴇᴀᴅ-ᴍᴇssᴀɢᴇ*
*├◈ .ᴀɴᴛɪ-ʙᴀᴅ*
*├◈ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├◈ .ᴀɴᴛɪ-ʟɪɴᴋ*
*├◈ .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
*├◈ .ʀᴇᴘᴏ*
*├◈ .ᴋɪɴɢ*
*├◈ .ꜱʏꜱᴛᴇᴍ*
*├◈ .ꜱᴛᴀᴛᴜꜱ*
*├◈ .Aʙᴏᴜᴛ*
*├◈ .ʙʟᴏᴄᴋ*
*├◈ .ᴜɴʙʟᴏᴄᴋ*
*├◈ .sʜᴜᴛᴅᴏᴡɴ*
*├◈ .ᴄʟᴇᴀʀᴄʜᴀᴛs*
*├◈ .sᴇᴛᴘᴘ*
*├◈ .ʙʀᴏᴀᴅᴄᴀsᴛ*
*├◈ .ᴊɪᴅ*
*├◈ .ɢᴊɪᴅ*
*├◈ .ᴘᴀɪʀ*
*├◈ .sᴀᴠᴇ*
*├◈ .ʀᴀɴᴋ*
*├◈ .ᴄᴀʟᴄ*
*├◈ .ʀᴇꜱᴛᴀʀᴛ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *👀 GROUP-CMD 👀* *❒⁠⁠⁠⁠* 
*├◈ .ʀᴇᴍᴏᴠᴇ*
*├◈ .ᴅᴇʟᴇᴛᴇ*
*├◈ .ᴀᴅᴅ*
*├◈ .ʀᴇᴊᴇᴄᴛs*
*├◈ .ᴀᴘᴘʀᴏᴠᴇ*
*├◈ .ᴘᴏʟʟ*
*├◈ .ᴋɪᴄᴋ*
*├◈ .ᴋɪᴄᴋᴀʟʟ*
*├◈ .sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├◈ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├◈ .ᴘʀᴏᴍᴏᴛᴇ*
*├◈ .ᴅᴇᴍᴏᴛᴇ*
*├◈ .ᴛᴀɢᴀʟʟ*
*├◈ .ɢᴇᴛᴘɪᴄ*
*├◈ .ɪɴᴠɪᴛᴇ*
*├◈ .ʀᴇᴠᴏᴋᴇ*
*├◈ .ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*├◈ .ᴀʟʟʀᴇǫ*
*├◈ .ᴍᴜᴛᴇ*
*├◈ .ᴅᴇʟ*
*├◈ .ᴜɴᴍᴜᴛᴇ*
*├◈ .ʟᴏᴄᴋɢᴄ*
*├◈ .ᴜɴʟᴏᴄᴋɢᴄ*
*├◈ .ʟᴇᴀᴠᴇ*
*├◈ .ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*├◈ .ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*├◈ .ᴊᴏɪɴ*
*├◈ .ʜɪᴅᴇᴛᴀɢ*
*├◈ .ɢɪɴғᴏ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*├◈ .ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*├◈ .sᴇɴᴅᴅᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*├◈ .ᴀʙᴏᴜᴛ*
*├◈ .ᴀʟɪᴠᴇ*
*├◈ .ʙᴏᴛɪɴꜰᴏ*
*├◈ .ꜱᴛᴀᴛᴜꜱ*
*├◈ .ᴘɪɴɢ*
*├◈ .ᴘɪɴɢ2*
*├◈ .ꜱʏꜱᴛᴇᴍ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌀 CONVERTER-CMD 🌀* *❒⁠⁠⁠⁠* 
*├◈ .sᴛɪᴄᴋᴇʀ*
*├◈ .ᴛʀᴛ*
*├◈ .ᴄᴜʀʀᴇɴᴄʏ*
*├◈ .ᴄᴏɴᴠᴇʀᴛᴍᴏɴᴇʏ*
*├◈ .ᴛᴛs*
*├◈ .ꜰᴀɴᴄʏ*
*├◈ .ᴜʀʟ*
*├◈ .Aɢᴇ*
*├◈ .ᴛɢs*
*├◈ .Cᴏɴᴠᴇʀᴛ*
*├◈ .ᴛɪɴʏ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🌈 DOWNLOADER-CMD 🌈* *❒⁠⁠⁠⁠* 
*├◈ .ғʙ*
*├◈ .ɪɴꜱᴛᴀ*
*├◈ .ɢᴅʀɪᴠᴇ*
*├◈ .ᴛᴡɪᴛᴛᴇʀ*
*├◈ .ᴛᴛ*
*├◈ .ᴍᴇᴅɪᴀғɪʀᴇ*
*├◈ .ᴘʟᴀʏ*
*├◈ .sᴏɴɢ*
*├◈ .sᴘᴏᴛɪꜰʏ*
*├◈ .ɪᴍɢ*
*├◈ .Lʏʀɪᴄs*
*├◈ .ᴀᴘᴋ*
*├◈ .ᴅᴀʀᴀᴍᴀ*
*├◈ .ʙᴀɪsᴄᴏᴘᴇ*
*├◈ .ɢɪɴɪsɪsɪʟᴀ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒*
*├◈ .ᴅᴏɢ*
*├◈ .ᴄᴀᴛ*
*├◈ .ᴀɴɪᴍᴇ*
*├◈ .ᴄᴏᴜᴘʟᴇᴘᴘ*
*├◈ .ꜰɪɴᴅɴᴀᴍᴇ*
*├◈ .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ1*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ2*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ3*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ4*
*├◈ .ᴀɴɪᴍᴇɢɪʀʟ5*
*├◈ .ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *😂 FUN-CMD 😂* *❒⁠⁠⁠⁠* 
*├◈ .Fᴀᴍɪʟʏ*
*├◈ .ʜᴇᴀʀᴛ*
*├◈ .ɴɪᴋᴀʟ*
*├◈ .sʜʏ*
*├◈ .ᴍᴏᴏɴ*
*├◈ .ᴄᴏɴғᴜsᴇᴅ*
*├◈ .ʜᴀᴘᴘʏ*
*├◈ .ᴀɴɢʀʏ*
*├◈ .sᴀᴅ*
*├◈ .ʜᴏᴛ*
*├◈ .ᴇᴍɪx🙂,😇*
*├◈ .ᴇxᴏʀ*
*├◈ .ᴀᴛᴛᴘ*
*├◈ .ꜱʜᴀᴘᴀʀ*
*├◈ .ʙᴏɴᴋ*
*├◈ .ꜱᴍᴜɢ*
*├◈ .ʙᴜʟʟʏ*
*├◈ .ᴀᴡᴏᴏ*
*├◈ .ᴋɪꜱꜱ*
*├◈ .ᴄᴜᴅᴅʟᴇ*
*├◈ .ʟɪᴄᴋ*
*├◈ .ɢʟᴏᴍᴘ*
*├◈ .ꜱᴍɪʟᴇ*
*├◈ .ʜɪɢʜꜰɪᴠᴇ*
*├◈ .ꜱʟᴀᴘ*
*├◈ .ʀᴀɴᴅᴏᴍsʜɪᴘ*
*├◈ .ᴋɪʟʟ*
*├◈ .ᴡɪɴᴋ*
*├◈ .ʙɪᴛᴇ*
*├◈ .ᴄʀɪɴɢᴇ*
*├◈ .ᴅᴀɴᴄᴇ*
*├◈ .ʙʟᴜꜱʜ*
*├◈ .ʜᴀɴᴅʜᴏʟᴅ*
*├◈ .ɴᴏᴍ*
*├◈ .ʜᴀᴄᴋ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*├◈ .ʏᴛꜱ*
*├◈ .ʏᴛᴀ*
*├◈ .ᴄᴏᴜɴᴛʀʏ*
*├◈ .ʟᴏʟɪ*
*├◈ .ᴍᴏᴠɪᴇɪɴғᴏ*
*├◈ .ᴍᴏᴠɪᴇ*
*├◈ .Gᴏᴏɢʟᴇ*
*├◈ .ᴡᴇᴀᴛʜᴇʀ*
*├◈ .sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🎮 GAME-CMD 🎮* *❒⁠⁠⁠⁠* 
*├◈ .ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*├◈ .ʀᴏʟʟ🎲*
*├◈ .ᴄᴏɪɴꜰʟɪᴘ🪙*
*├◈ .pick*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*├◈ .ɢᴘᴛ*
*├◈ .ᴀɪ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🍉 BOT-CMD 🍉* *❒⁠⁠⁠⁠* 
*├◈ .ᴠᴇʀsɪᴏɴ*
*├◈ .ʀᴇᴘᴏ*
*├◈ .ᴍᴇɴᴜ*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🏞️ WALLPAPERS-CMD 🏞️* *❒⁠⁠⁠⁠* 
*├◈ .ɪᴍɢ*
*├◈ .ʟᴏɢᴏ*
*├◈ .ss*
*┕──────────────────❒*
*╭────❒⁠⁠⁠⁠* *🔮 OTHER-CMD 🔮* *❒⁠⁠⁠⁠* 
*├◈ .ᴛʀᴛ*
*├◈ .ᴊᴏᴋᴇ*
*├◈ .ꜰᴀᴄᴛ*
*├◈ .ɢɪᴛʜᴜʙ*
*├◈ .ɢᴘᴀꜱꜱ*
*├◈ .ʜᴀᴄᴋ*
*├◈ .ǫᴜᴏᴛᴇ*
*├◈ .ꜱʀᴇᴘᴏ*
*├◈ .sʏsᴛᴇᴍ*
*├◈ .ʀᴀɴᴋ*
*├◈ .Tɪᴍᴇᴢᴏɴᴇ*
*├◈ .ᴅᴇꜰɪɴᴇ*
*├◈ .Dᴀɪʟʏꜰᴀᴄᴛ*
*├◈ .Mɪɴᴜᴛᴏʀ*
*┕──────────────────❒*
> *© ᴘσωєʀє∂ ву 𝖐𝚊𝚒𝚜𝖊𝖓 𝙼ԃ⎯꯭̽💀*`;


 
  await conn.sendMessage(
    from,
    {
        video: { url: config.ALIVE_IMG },
        caption: dec,
        gifPlayback: true,
         mimetype: 'video/mp4' ,
        contextInfo: {
            mentionedJid: [sender]
        }
    },
    { quoted: mek }
);
    // Audio URLs list
    let audioUrls = [
        'https://files.catbox.moe/nf8ska.mp3',
        'https://files.catbox.moe/zy1vib.mp3',
        'https://files.catbox.moe/ckaofd.mp3',
        'https://files.catbox.moe/rqgr2c.mp3',
        'https://files.catbox.moe/lf0xs9.mp3',
        'https://files.catbox.moe/0ougu9.mp3',
        'https://files.catbox.moe/q4arm4.mp3',
        'https://files.catbox.moe/dybznq.mp3',
        'https://files.catbox.moe/6v918j.mp3',
        'https://files.catbox.moe/4ld703.mp3',
        'https://files.catbox.moe/p0bdyk.mp3',
        'https://files.catbox.moe/x9omvz.mp3',
        'https://files.catbox.moe/ulh93p.mp3'
    ];

    // Randomly select an audio URL
    const audioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

    // Send audio message
    await conn.sendMessage(
        from,
        {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            ptt: true
        },
        { quoted: mek }
    );

}catch (e) {
    console.error(e);
    reply(`${e}`);
}
});
