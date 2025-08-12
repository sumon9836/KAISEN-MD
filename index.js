const WhatsApp = require('./lib/client')

const start = async () => {
 try {
    const bot = new WhatsApp('connect')
    await bot.init();
    await bot.connect();
    await bot.web();
  } catch (error) {
    console.error(error)
  }
}
start()