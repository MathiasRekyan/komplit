const discord = require('discord.js');
const Client = new discord.Client(); // creating a new Client

module.exports.run = async (Client, message, args, prefix) => { // for the cmd handler 

    if(!message.content.startsWith(prefix)) return; // makes sure it starts with the prefix

    const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }



module.exports.help = {
    name: "ping", // name of the cmd
    aliases: ['ms'] // another names for the cmd
}
