const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                            
    const embed = new Discord.MessageEmbed()
    .setTitle("Sacrificial Greatsword")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "44 (max 565)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 6.7% (max 30.6%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Composed", "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Greatsword.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                            
    }
        
    module.exports.help = {
        name: `SacrificialGreatsword`, //change with weapon name wihout space
        aliases: ["sacrificialgreatsword" , "Sacrificialgreatsword", "sacrigreatsword"]
    }