const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Sharpshooter's Oath")
    .addField("⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "CRIT DMG 10.2%(Maks 46.9%)", true)
    .addField("Passive Ability: Precise", "Increases DMG against weak spots by 24~48%")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Sharpshooter's_Oath.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `Sharpshooter `, 
        aliases: ["sharp","sharpshooter","sharpoath","sharpshooter"]
    }