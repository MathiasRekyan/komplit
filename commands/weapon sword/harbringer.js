const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Harbringer of Dawn")
    .addField("\u200B", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "CRIT DMG+ 10.2% (max 46.9%)", true)
    .addField("Passive Ability: Vigorous", "When HP is above 90%, increases CRIT Rate by 14~28%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Harbinger_of_Dawn.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `harbringerofdawn`,
        aliases: ["hod" , "harbringer" , "dawn"]
    }