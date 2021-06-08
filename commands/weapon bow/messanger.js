const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Messenger")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha & Chest" , true)
    .addField("\u200B", "⧫ ATK: " + "40 (max 448)" + "\r\n ⧫ 2nd Stat: " + "CRIT DMG 6.8%(Maks 31.2%)", true)
    .addField("Passive Ability: Archer's Message", "Charged Attack hits on weak spots deal an additional 100~200% ATK DMG as CRIT DMG. Can only occur once every 10s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Messenger.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `Messanger`, 
        aliases: ["messanger", "mess"]
    }