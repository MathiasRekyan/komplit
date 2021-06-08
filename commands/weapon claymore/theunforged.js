const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                                    
    const embed = new Discord.MessageEmbed()
    .setTitle("The Unforged")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "46 (max 608)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 10.8% (max 49.6%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Golden Majesty", "Increases Shield Strength by 20/25/30/35/40%, scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield this ATK increase effect is increased by 100%") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Unforged.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                                    
    }
                
    module.exports.help = {
        name: `TheUnforged`, //change with weapon name wihout space
        aliases: ["Theunforged" , "theunforged" , "tu"]
    }