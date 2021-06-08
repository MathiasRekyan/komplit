const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Royal Spear")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Starglitter Exchange" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (565)" + "\r\n ⧫ 2nd Stat: " + "ATK 6.0% (27.6%)", true)
    .addField("Passive Ability: Focus", "Upon dealing damage to an opponent, increases CRIT Rate by 8~16%. Max 5 stacks. A CRIT hit removes all existing stacks.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Spear.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `royalspear`,
        aliases: ["rs"]
    }