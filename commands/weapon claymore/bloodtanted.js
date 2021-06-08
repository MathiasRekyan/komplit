const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Bloodtainted Greatsword")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Chest" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "38 (max 354)" + "\r\n ⧫ 2nd Stat: " + "Elemental Mastery+ 41 (max 187)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Bane of Fire and Thunder", "Increases DMG against enemies affected by Pyro or Electro by 12/15/18/21/24%.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Bloodtainted_Greatsword.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `Bloodtaintedgreatsword`, //change with weapon name wihout space
        aliases: ["bloodtaintedgreatsword" , "BloodtaintedGreatsword" , "blood"]
    }
