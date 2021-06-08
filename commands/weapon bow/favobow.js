const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Favonious Warbow")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 13.3% (Maks 61.3%)", true)
    .addField("Passive Ability: Windfall", "CRIT hits have a 60-100% chance to generate small amount of Elemental Particles, which will regenerate 6 energy for the character. can only occur once every 12-6s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Warbow.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `FavoniousWarbow`, 
        aliases: ["favobow","favoniusbow","favoniuswarbow","fw"]
    }
