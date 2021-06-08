const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Prototype Starglitter")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Crafting" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (510)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 10.0% (45.9%)", true)
    .addField("Passive Ability: Magic Affinity", "After using an Elemental Skill, increases Normal and Charged Attack DMG by 8~16% for 12s. Max 2 stacks.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Starglitter.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `prototypestarglitter`,
        aliases: ["starglitter", "pglitter"]
    }