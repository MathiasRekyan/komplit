const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("White Tassel")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Chest" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (401)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate 5.1% (23.4%)", true)
    .addField("Passive Ability: Sharp", "Increases Normal Attack DMG by 24~48%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/White_Tassel.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `whitetassel`,
        aliases: ["wt","white"]
    }