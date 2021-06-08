const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Solar Pearl")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Battle Pass" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate+ 6% (max 27.6%)", true)
    .addField("Passive Ability: Solar Shine", "Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20% for 6s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Solar_Pearl.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `solarpearl`,
        aliases: ["solar","pearl"]
    }