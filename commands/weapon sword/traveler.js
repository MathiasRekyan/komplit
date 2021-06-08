const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Traveler's Handy Sword")
    .addField("\u200B", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "40 (max 448)" + "\r\n ⧫ 2nd Stat: " + "DEF 6.4% (max 27.5%)", true)
    .addField("Passive Ability: Journey", "Each Elemental Orb or Particle collected restores 1~2% HP.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Traveler's_Handy_Sword.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `traveler`,
        aliases: ["ths", "handysword" ]
    }
