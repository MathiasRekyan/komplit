const Discord = require('discord.js');

 module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
        
    const embed = new Discord.MessageEmbed()
    .setTitle("Ferrous Shadow")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "HP+ 7.7% (max 35.2%%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Unbending", "When HP falls below 70/75/80/85/90%, increases Charged Attack DMG by 30/35/40/45/50%, and Charged Attacks become much harder to interrupt.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Ferrous_Shadow.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
     message.channel.send(embed);
        
    }       
            
    module.exports.help = {
        name: `FerrousShadow`, //change with weapon name wihout space
        aliases: ["ferrousshadow" , "Ferrousshadow" , "FerrousShadow" , "fs"]
    }
