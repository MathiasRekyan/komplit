const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Windblume Ode")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Limited Time Event" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery 36 (Maks 165)", true)
    .addField("Passive Ability: Windblume Wish", "After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16~32% for 6s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Windblume_Ode.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `WindblumeOde`, 
        aliases: ["wo","windblume","windode","windblumeode"]
    }
