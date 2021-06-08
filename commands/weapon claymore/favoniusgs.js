const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                       
    const embed = new Discord.MessageEmbed()
    .setTitle("Favonius Greatsword")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 13.3% (max 61.3%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Windfall", "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Greatsword.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                       
    }       
    
    module.exports.help = {
        name: `FavoniusGreatsword`, //change with weapon name wihout space
        aliases: ["Favoniusgreatsword" , "favoniusgreatsword", "fgs"]
    }