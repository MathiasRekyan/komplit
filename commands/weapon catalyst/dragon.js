const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Thrilling Tales of Dragon Slayers")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "HP+ 7.7% (max 35.2%)", true)
    .addField("Passive Ability: Legacy", "When switching characters, the new character taking the field has their ATK increased by 24% for 10s. This effect can only occur once every 20s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Thrilling_Tales_of_Dragon_Slayers.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `thrillingtalesofdragonslayers`,
        aliases: ["dragonslayer","thrilling","dragon"]
    }