const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                                
    const embed = new Discord.MessageEmbed()
    .setTitle("Snow-Tombed Starsilver")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Crafting" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "44 (max 565)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG Bonus+ 7.5% (max 34.5%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Frost Burial", "Hitting an opponent with Normal and Charged Attacks has a 60/70/80/90/100% chance of forming and dropping an Everfrost Icicle above them, dealing 80/95/110/125/140% AoE ATK DMG.Opponents affected by Cryo are dealt 200/240/280/320/360% ATK DMG. Can only occur once every 10s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Snow-Tombed_Starsilver.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                                
    }
            
    module.exports.help = {
        name: `Snow-TombedStarsilver`, //change with weapon name wihout space
        aliases: ["Snow-tombedstarsilver" , "snow-tombedstarsilver" , "stss"]
    }