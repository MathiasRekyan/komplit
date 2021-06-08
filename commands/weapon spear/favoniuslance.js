const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Favonius Lance")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (565)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 6.7% (30.6%)", true)
    .addField("Passive Ability: Windfall", "CRIT hits have a 60~100% chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every 12~6s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Lance.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `favoniuslance`,
        aliases: ["fl"]
    }