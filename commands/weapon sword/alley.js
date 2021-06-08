const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .addField("The Alley Flash", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "45 (max 620)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+  12 (max 55)", true)
    .addField("Passive Ability: Itinerant Hero", "Increases DMG dealt by the character equipping this weapon by 12~24%. Taking DMG disables this effect for 5s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Alley_Flash.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `alleyflash`,
        aliases: ["alleyflash" , "flash" , "thealleyflash" , "taf"]
    }