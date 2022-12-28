
var express = require('express');
var conf = require('./config/conf');
var TelegramBot = require('node-telegram-bot-api');


var app = express();



var server = app.listen(4000, function () {
    
})

/*创建实例对象开始*/
var bot = new TelegramBot(conf.token, {polling: true});
/*创建实例对象结束*/



/*监听新消息*/
bot.on('message', (msg) => { 
	bot.sendMessage(msg.chat.id, "群id是"+msg.chat.id);
});
