const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Festering Desire", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Story Quest" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 10.0% (max 45.9%)", true)
    .addField("Passive Ability: Undying Admiration", "Increases Elemental Skill DMG by 16~32% and Elemental Skill CRIT Rate by 6~12%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Festering_Desire.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `festering`,
        aliases: ["festeringdesire" , "desire" ]
    }
