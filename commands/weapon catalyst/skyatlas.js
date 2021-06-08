const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Skyward Atlas")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "48 (max 674)" + "\r\n ⧫ 2nd Stat: " + "ATK+ 7.2% (max 33.1%)", true)
    .addField("Passive Ability: Wandering Clouds", "Increases Elemental DMG Bonus by 12%. Normal Attack hits have a 50% chance to earn the favor of the clouds. which actively seek out nearby opponents to attack for 15s, dealing 160% ATK DMG. Can only occur once every 30s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Atlas.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `skywardatlas`,
        aliases: ["skyatlas","Skywardatlas"]
    }