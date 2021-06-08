const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Lost Prayer to the Sacred Winds")
    .addField("\u200B", "⧫ Type: " + "Catalyst" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "46 (max 608)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate+ 7.2% (max 33.1%)", true)
    .addField("Passive Ability: Boundless Blessing", "Increases Movement SPD by 10%. When in battle, gain an 10% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.")
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/9/98/Weapon_Lost_Prayer_to_the_Sacred_Winds.png/revision/latest?cb=20201116034132", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/128?cb=20210413210802")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `lostprayertothesacredwinds`,
        aliases: ["lostprayer","prayer", "sacredwinds" , "lpttsw"]
    }