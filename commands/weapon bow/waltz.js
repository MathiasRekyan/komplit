const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Mitternachts Waltz")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG bonus 11.3% (Maks 51.9%)", true)
    .addField("Passive Ability: Infusion Arrow", "Normal Attack hits on opponents increase Elemental Skill DMG by 20% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 20% for 5s.")
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/7/77/Weapon_Mitternachts_Waltz.png/revision/latest/scale-to-width-down/256?cb=20210611013556", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `MitternachtsWaltz`, 
        aliases: ["mitter","waltz","walts","nacht","miter"]
    }
