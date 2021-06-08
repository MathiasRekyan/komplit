const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Blackcliff Slasher")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Starglitter Exchange" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "CRIT DMG + 12% (max 55.1%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Press the Advantage", "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Slasher.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
    
    }       
        
    module.exports.help = {
        name: `BlackcliffSlasher`, //change with weapon name wihout space
        aliases: ["Blackcliffslasher" , "blackcliffslasher", "bcs"]
    }