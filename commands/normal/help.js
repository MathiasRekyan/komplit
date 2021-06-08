const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith("^")) return;

    const page1 = new discord.MessageEmbed()
    .setTitle('**Fun Command**')
    .setDescription('Just for fun!')
    .addField('`^ascii`', 'Converts text into ascii')
    .addField('`^avatar`', 'See yours/someone avatar')
    .addField('`^hi`', 'Simple reply')
    .addField('`^meme`', 'Random meme for you')
    .addField('`^poll` <tag channel> <what you want to poll>', 'Make a poll in some channel')
    .addField('`^weather <city>`', 'Show current weather in specific location')
    .setThumbnail('https://media1.tenor.com/images/83c51c0e7a340e6b3d30de2e9e2a1393/tenor.gif?itemid=18658050')
    
    const page2 = new discord.MessageEmbed()
    .setTitle('**INFORMATION**')
    .setDescription('Some important info you can get :D')
    .addField('`^list`', 'Show the weapon,character, and artifact detail')
    .addField('`^covid <country>`', 'Show current covid status')
    .addField('`^user` <mention>', 'Show user detail')
    .addField('`^ping`', 'Show BOT ping to the discord server at the moment')
    .addField('`^botinfo`', 'What is this?')
    .addField('`^report <tag user>, <reason>`', 'Use this if it`s important!')
    .setThumbnail('https://media1.tenor.com/images/83c51c0e7a340e6b3d30de2e9e2a1393/tenor.gif?itemid=18658050')
    
    const page3 = new discord.MessageEmbed()
    .setTitle('SUGGESTION PLEASE')
    .setDescription('Have suggestions for future features of this robot? Please contact Ars#6674')
    .setThumbnail('https://media1.tenor.com/images/83c51c0e7a340e6b3d30de2e9e2a1393/tenor.gif?itemid=18658050')
    
    const page4 = new discord.MessageEmbed()
    .setTitle('ADMIN COMMAND')
    .setDescription('==================')
    .addField('`What?`', 'Are you a admin here? XD')
    .setThumbnail('https://media1.tenor.com/images/83c51c0e7a340e6b3d30de2e9e2a1393/tenor.gif?itemid=18658050')

    const pages = [
        page1,
        page2,
        page3,
        page4
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '10000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'help',
    aliases: []
};
