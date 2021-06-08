const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Pocket Grimoire")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐" + "\r\n ⧫ Location: " + "Chests" , true)
    .addField("\u200B", "⧫ ATK: " + "33 (max 243)" + "\r\n ⧫ 2nd Stat: " + "None", true)
    .addField("Passive Ability: None", "None")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Pocket_Grimoire.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `pocketgrimoire`,
        aliases: ["pocket"]
    }