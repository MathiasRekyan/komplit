const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Twin Nephrite")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Chests" , true)
    .addField("\u200B", "⧫ ATK: " + "40 (max 102)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate+ 3.4% (max 15.6%)", true)
    .addField("Passive Ability: Guerilla Tactic", "Defeating an opponent increases Movement SPD and ATK by 12% for 15s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Twin_Nephrite.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `twinnephrite`,
        aliases: ["twin","nephrite"]
    }
