const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Halberd")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "40 (448)" + "\r\n ⧫ 2nd Stat: " + "ATK 5.1% (23.4%)", true)
    .addField("Passive Ability: Heavy", "Normal Attacks deal an additional 160~320% DMG. Can only occur once every 10s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Halberd.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `halberd`,
        aliases: ["hb"]
    }