const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
            
    const embed = new Discord.MessageEmbed()
    .setTitle("Serpent Spine")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "BP Bounty" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate+ 6% (max 27.6%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Wavesplitter", "Every 4s a character is on the field, they will deal 6/7/8/9/10% more DMG and take 3/2.7/2.4/2.1/1.8% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Serpent_Spine.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
            
    }       
                
    module.exports.help = {
        name: `SerpentSpine`, //change with weapon name wihout space
        aliases: ["Serpentspine" , "serpentspine", "serpent"]
    }