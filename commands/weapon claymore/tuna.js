const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Luxurious Sea-Lord")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Moonlight Merriment Event" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 12% (max 55.1%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: TBA", "Increases Elemental Burst DMG by 12%. When Elemental Burst hits opponents, there is a 100% chance of summoning a titanic tuna that charges and deals 100% ATK as AoE DMG. This effect can occur once every 15s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Weapon_Luxurious_Sea-Lord.png/revision/latest/scale-to-width-down/256?cb=20210901044903", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `Luxurioussealord`, //change with weapon name wihout space
        aliases: ["tunaweapon" , "tuna" , "sealord" , "fishclaymore" ]
    }
