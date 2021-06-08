const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
        
    const embed = new Discord.MessageEmbed()
    .setTitle("Rainslasher")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+ 36 (max 165)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Bane of Storm and Tide", "Increases DMG against enemies affected by Hydro or Electro by 20/25/30/35/40%.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Rainslasher.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
        
    }       
            
    module.exports.help = {
        name: `Rainslasher`, //change with weapon name wihout space
        aliases: ["rainslasher" , "rs"]
    }