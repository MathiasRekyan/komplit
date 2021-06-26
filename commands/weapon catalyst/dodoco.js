const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Apprentice's Notes")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Event" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "ATK+12% (max 55.1%", true)
    .addField("Passive Ability: Dodoventure!", "Normal Attack hits on opponents increase Charged Attack DMG by 16%/20%/24%/28%/32% for 6s. Charged Attack hits on opponents increase ATK by 8%/10%/12%/14%/16% for 6s. ")
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/5/51/Weapon_Dodoco_Tales.png/revision/latest/scale-to-width-down/256?cb=20210613085809", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `dodocotales`,
        aliases: ["dt", "dodoco"] 
    }
