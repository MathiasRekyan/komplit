const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Amos Bow")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "46 (max 608)" + "\r\n ⧫ 2nd Stat: " + "ATK 10.8% (Maks 49.6%)", true)
    .addField("Passive Ability: Strong-Willed", "Increases Normal Attack and Charged Attack DMG by 12%. After a Normal or Charged Attack is Fired.DMG dealt increases by a further 8% every 0.1 second the arrow is in the air for up to 5 times.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Amos'_Bow.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `amosbow`, 
        aliases: ["amos"]
    }