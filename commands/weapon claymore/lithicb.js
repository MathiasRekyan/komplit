const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Lithic Blade")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 9% (max 41.3%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Lithic Axiom - Unity", "For every characters who hails from Liyue, the characters who equips this weapon gains 7/8/9/10/11% ATK increase and a 3/4/5/6/7% CRIT Rate increase. This effect stacks up to 4 times.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Lithic_Blade.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
    
    }       
        
    module.exports.help = {
        name: `LithicBlade`, //change with weapon name wihout space
        aliases: ["Lithicblade" , "lithicblade", "lb"]
    }