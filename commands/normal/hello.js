const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`Hi, I'am a Bot develop by Ars`)
    
}

module.exports.help = {
    name: `hello`,
    aliases: ["hey", "hi"]
};
