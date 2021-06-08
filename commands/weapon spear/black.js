const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Black Tassel")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "38 (354)" + "\r\n ⧫ 2nd Stat: " + "HP 10.2% (46.9%)", true)
    .addField("Passive Ability: Bane of the Soft", "Increases DMG against slimes by 40~80%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Black_Tassel.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `blacktassel`,
        aliases: ["bt", "black"]
    }