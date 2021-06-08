const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Dragon's Bane")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (454)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery 48 (221)", true)
    .addField("Passive Ability: Bane of Flame and Water", "Increases DMG against opponents affected by Hydro or Pyro by 20~36%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Dragon's_Bane.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `dragonsbane`,
        aliases: ["db"]
    }