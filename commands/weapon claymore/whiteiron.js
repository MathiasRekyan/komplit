const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
               
    const embed = new Discord.MessageEmbed()
    .setTitle("White Iron Greatsword")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "39 (max 401)" + "\r\n ⧫ 2nd Stat: " + "DEF+ 9.6% (max 43.9%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Cull the Weak", "Defeating an opponent restores 8/10/12/14/16% HP.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/White_Iron_Greatsword.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
               
    }       
                   
    module.exports.help = {
        name: `WhiteIronGreatsword`, //change with weapon name wihout space
        aliases: ["whiteirongreatsword" , "Whiteirongreatsword"," wigs"]
    }