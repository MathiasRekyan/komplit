const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Recurve Bow")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐" + "\r\n ⧫ Location: " + "Chest" , true)
    .addField("\u200B", "⧫ ATK: " + "38 (max 354)" + "\r\n ⧫ 2nd Stat: " + "HP 10.2%(Maks 46.9%)", true)
    .addField("Passive Ability: Cull the Weak", "Defeating an opponent restores 8~16% HP.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Recurve_Bow.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `RecurveBow`, 
        aliases: ["recurve","recurvebow"]
    }