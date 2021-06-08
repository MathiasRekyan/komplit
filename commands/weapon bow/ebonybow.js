const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("	Ebony Bow")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐" + "\r\n ⧫ Location: " + "Chest" , true)
    .addField("\u200B", "⧫ ATK: " + "40 (max 448)" + "\r\n ⧫ 2nd Stat: " + "ATK 6.3%(Maks -)", true)
    .addField("Passive Ability: Decimate", "Increases DMG against mechanoid Ruin opponents by 40~80%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Ebony_Bow.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `EbonyBow`, 
        aliases: ["ebony","ebonybow"]
    }