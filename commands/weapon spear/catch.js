const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("The Catch")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Fishing Shop Inazuma" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (510)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 10.0% (45.9%)", true)
    .addField("Passive Ability: Shanty", "Increases Elemental Burst DMG by 16/20/24/28/32% and Elemental Burst CRIT Rate by 6/7.5/9/10.5/12%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Catch.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `thecatch`,
        aliases: ["catch","aquaman"]
    }
