const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Lion's Roar", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 9% (max 41.3%)", true)
    .addField("Passive Ability: Bane of Fire and Thunder", "Increases DMG against enemies affected by Pyro or Electro by 20~36%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Lion's_Roar.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `lion`,
        aliases: ["lionsroar" , "lionroar" , "roar"]
    }