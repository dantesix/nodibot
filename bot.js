var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: process.env.BOT_API_KEY, // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'NodiBot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'meow!', params);
    
});