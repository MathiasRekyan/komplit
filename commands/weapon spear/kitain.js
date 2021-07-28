const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Kitain Cross Spear")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Forging" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (max 565)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery 24 (max 110)", true)
    .addField("Passive Ability: Samurai Conduct", "Increases Elemental Skill DMG by 6~12%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3~5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.")
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/1/13/Weapon_Kitain_Cross_Spear.png/revision/latest/scale-to-width-down/256?cb=20210723074313", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `kitaincrossspear`,
        aliases: ["kitaincross", "kitain", "crossspear"]
    }
