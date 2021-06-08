const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
           
    const embed = new Discord.MessageEmbed()
    .setTitle("Skyrider Greatsword")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG Bonus+ 9.6% (max 43.9%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Courage", "On hit, Normal or Charged Attacks increase ATK by 6/7/8/9/10% for 6s. Max 4 stacks. Can only occur once every 0.5s.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyrider_Greatsword.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
           
    }       
               
    module.exports.help = {
        name: `SkyriderGreatsword`, //change with weapon name wihout space
        aliases: ["Skyridergreatsword" , "skyridergreatsword", "sgs"]
    }