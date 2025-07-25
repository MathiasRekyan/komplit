const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Cool Steel")
    .addField("\u200B", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 7.7% (max 35.2%)", true)
    .addField("Passive Ability: Bane of Water and Ice", "Increases DMG against opponents affected by Hydro or Cryo by 12~24%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Cool_Steel.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `coolsteel`,
        aliases: ["cool" , "steel" , "cs"]
    }