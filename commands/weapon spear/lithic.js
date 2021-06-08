const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Lithic Spear")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (565)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 6.0% (max 27.6%)", true)
    .addField("Passive Ability: Lithic Axiom - Unity", "For every character in the party who hails from Liyue, the character who equips this weapon gains 7~11% ATK increase and a 3~7% CRIT Rate increase. This effect stacks up to 4 times.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Lithic_Spear.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `lithicspear`,
        aliases: ["ls", "lithic"]
    }