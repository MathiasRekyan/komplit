const Discord = require('discord.js'); 

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return; // make sure its starts with the prefix

    
    const target = message.mentions.users.first() || message.author

                const whois = new Discord.MessageEmbed()

                .setAuthor(`${target.username}`)
                .addField('Discord Name', `${target.username}`, true)
                .addField('Tag', `${target.discriminator}`, true)
                .addField('Joined Server Date', `${target.joinedAt}`, true)
                .addField('Account Creation Date', `${target.createdAt}`, true)
                .addField('Is bot?', `${target.bot}`, true)
                .addField('ID', `${target.id}`, true)
                .addField('FW', `${target.lastMessage}`, true)
                .setThumbnail(target.displayAvatarURL({dynamic: true}))
                .setColor('RANDOM')
                message.channel.send(whois)




        }
module.exports.help = {
    name: "user",
    aliases: ["who", 'whois']
}