const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                                        
    const embed = new Discord.MessageEmbed()
    .setTitle("Wolf's Gravestone")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "46 (max 608)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 10.8% (max 49.6%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Wolfish Tracker", "Increases ATK by 20/25/30/35/40%. On hit, attacks against enemies with less than 30% HP increase all party members' Base ATK by 40/50/60/70/80% for 12s. Can only occur once every 30s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Wolf's_Gravestone.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                                        
    }
                    
    module.exports.help = {
        name: `Wolf'sGravestone`, //change with weapon name wihout space
        aliases: ["WGS" , "wgs" , "Wolfgravestone" , "wolfgravestone"]
    }