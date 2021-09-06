const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Engulfing Lightning")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "46 (608)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 12% (55.1%)", true)
    .addField("Passive Ability: Timeless Dream: Eternal Stove", "ATK increased by 28%-56% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80%-120% ATK. Gain 30%-50% Energy Recharge for 12s after using an Elemental Burst.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Engulfing_Lightning.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `engulfinglightning`,
        aliases: ["engulfing", "baalspear", "raidenspear", "shogunspear"]
    }
