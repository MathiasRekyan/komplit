const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Skywarp Harp")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "48 (max 674)" + "\r\n ⧫ 2nd Stat: " + "Crit Rate 4.8% (Maks 22.1%)", true)
    .addField("Passive Ability: Echoing Ballad", "Increases Crit DMG by 20%.Hits have a 60% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Harp.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `skywardharp`, 
        aliases: ["skyharp","skyward","harp"]
    }