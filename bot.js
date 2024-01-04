const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios');

const bot = new Telegraf('6862315003:AAHcYtRKNG6CTlgH3_1J6EyNCpVv2ufhRoc')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.on('message', async (ctx) => {
  const url = 'https://api.publicapis.org/entries';
  const response = await axios.get(url);
  console.log(response);
  
  ctx.reply(`${response.data.count}`);
});

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))