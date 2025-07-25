const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                   
    const embed = new Discord.MessageEmbed()
    .setTitle("Quartz")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "40 (max 448)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+ 16 (max 16)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Residual Heat", "Upon causing an Overloaded, Melt, Burning, Vaporize, or a Pyro-infused Swirl reaction, increases Base ATK by 20/25/30/35/40% for 12s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Quartz.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                   
    }       

    module.exports.help = {
        name: `Quartz`, //change with weapon name wihout space
        aliases: ["quartz"]
    } 