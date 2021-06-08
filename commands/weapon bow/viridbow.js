const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("The Viridescent Hunt")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Battle Pass" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Crit Rate 6% (Maks 27.6%)", true)
    .addField("Passive Ability: Verdant Wind", "Upon hit, Normal and Aimed Shot Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing 40~80% of ATK as DMG to these opponents every 0.5s for 4s. This effect can only occur once every 14~10s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Viridescent_Hunt.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `TheViridescentBow`, 
        aliases: ["virid","tvb","theviridescendbow"]
    }