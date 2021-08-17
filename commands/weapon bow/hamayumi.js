const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Hamayumi")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Forge" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "ATK 12% (Maks 55.1%)", true)
    .addField("Passive Ability: Full Draw", "Increases Normal Attack DMG by 16~32% and Charged Attack DMG by 12~24%. When the equipping character's Energy reaches 100%, this effect is increased by 100%")
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Weapon_Hamayumi.png/revision/latest/scale-to-width-down/256?cb=20210726032818", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `hamayumi`, 
        aliases: ["hamayum"]
    }
