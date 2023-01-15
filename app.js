var conf = require('./config/conf');
var TelegramBot = require('node-telegram-bot-api');


/*创建实例对象开始*/
var bot = new TelegramBot(conf.token, {polling: true});
/*创建实例对象结束*/

/*监听新消息*/
bot.on('message', (msg) => { 
	bot.sendMessage(msg.chat.id, `ID：<code>${msg.chat.id}</code> (点击复制)`,{
		parse_mode: 'HTML',
	});
});
