const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Compound Bow")
    .addField("\u200B","⧫ Type: " + "Bow" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Crafting" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (max 454)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG bonuse 15% (Maks 69%)", true)
    .addField("Passive Ability: Infusion Arrow", "Normal Attack and Charged Attack hits increases ATK by 4-8% and Normal Attack SPD by 1.2-2.4 for 6s. Max 4 stacks. Can only occur once every 0.3s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Compound_Bow.png", 2, 2) 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `CompoundBow`, 
        aliases: ["compound","compoundbow"]
    }