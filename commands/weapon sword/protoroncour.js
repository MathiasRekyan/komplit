const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Protorype Rancour", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Crafting" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (max 565)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG+ 7.5% (max 34.5%)", true)
    .addField("Passive Ability: Smashed Stone", "On hit, Normal or Charged Attacks increase ATK and DEF by 4~8% for 6s. Max 4 stacks. Can only occur once every 0.3s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Rancour.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `rancour`,
        aliases: ["protorancour" , "prototyperancour" , "pr"]
    }
