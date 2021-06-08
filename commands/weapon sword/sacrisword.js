const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Sacrifical Sword", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 13.3% (max 61.3%)", true)
    .addField("Passive Ability: Composed", "After dealing damage to an opponent with an Elemental Skill, the skill has a 40~80% chance to end its own CD. Can only occur once every 30~16s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Sword.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `sacrificalsword`,
        aliases: ["sacrisword"]
    }
