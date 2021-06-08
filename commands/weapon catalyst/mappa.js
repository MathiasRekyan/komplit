const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Mappa Mare")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Forging" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (max 565)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+ 24 (max 110)", true)
    .addField("Passive Ability: Infusion Scroll", "Triggering an Elemental reaction grants a 8% Elemental DMG Bonus for 10s. Max 2 stacks.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Mappa_Mare.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `mappamare`,
        aliases: ["mappa","mare"]
    }