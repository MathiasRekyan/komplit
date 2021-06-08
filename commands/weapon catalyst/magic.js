const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Magic Guide")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "38 (max 354)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+ 41 (max 187)", true)
    .addField("Passive Ability: Bane of the Storm and Tide", "Increases DMG against opponents affected by Hydro or Electro by 12%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Magic_Guide.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `magicguide`,
        aliases: ["magic","maguide"]
    }