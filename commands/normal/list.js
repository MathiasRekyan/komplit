const discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports.run = async (Client, message, prefix, args) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new discord.MessageEmbed()
    .setTitle('**Weapon**')
    .setDescription('How to see Genshin Impact weapon detail')
    .addFields(
        { name: 'So, if you want to see weapon detail just simply use:', value: '`^<weapon name without space>`'}, // Fields, inline: true mean they will be in the same line
        { name: 'Example: ', value: '`^lostprayertothesacredwinds`,`^lostprayer`,`^lpttsw`'},
        { name: 'Basically you can fill in the full name without space, one of the weapon names, or the abbreviation of the weapon.', value: 'If you have suggestion for another name for the weapon, Please directly message me!'},
        )
    .setThumbnail('https://cdn.discordapp.com/attachments/783201977538445343/851892739083468810/ww.png')
    
    const page2 = new discord.MessageEmbed()
    .setTitle('**Artifact**')
    .setDescription('Artifact detail')
    .setImage('https://media0.giphy.com/media/cebnL50gs0QJi53Yuj/giphy.gif?cid=790b761169741b34e2325779dbe12d218d70e7d85156f2f4&rid=giphy.gif&ct=s')
    
    const page3 = new discord.MessageEmbed()
    .setTitle('**Character**')
    .setDescription('Character Detail')
    .setImage('https://media0.giphy.com/media/cebnL50gs0QJi53Yuj/giphy.gif?cid=790b761169741b34e2325779dbe12d218d70e7d85156f2f4&rid=giphy.gif&ct=s')


    const pages = [
        page1,
        page2,
        page3
        
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '10000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: 'list',
    aliases: []
}