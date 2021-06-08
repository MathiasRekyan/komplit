const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Primordial Jade Cutter", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (max 542)" + "\r\n ⧫ 2nd Stat: " + "Crit Rate+ 9.6% (max 44.1%)", true)
    .addField("Passive Ability: Protector's Virtue", "HP increased by 20~40%. Additionally, provides an ATK Bonus based on 1.2~2.4% of the wielder's Max HP.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Primordial_Jade_Cutter.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `jadecutter`,
        aliases: ["primordialjadecutter" , "jade" , "jadecutter" , "pjc"]
    }
