const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Otherworldly Story")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Chests" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 8.5% (max 39.0%)", true)
    .addField("Passive Ability: Energy Shower", "Each Elemental Orb or Particle collected restores 1% HP.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Otherworldly_Story.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `otherworldlystory`,
        aliases: ["other","world","otherworld"]
    }
