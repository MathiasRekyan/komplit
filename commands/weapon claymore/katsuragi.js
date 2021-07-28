const Discord = require('discord.js');

 module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
        
    const embed = new Discord.MessageEmbed()
    .setTitle("	Katsuragikiri Nagamasa")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "42 (max 510)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 10% (max 45.9%%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Samurai Conduct", "Increases Elemental Skill DMG by 6~12%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3~5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Katsuragikiri_Nagamasa.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
     message.channel.send(embed);
        
    }       
            
    module.exports.help = {
        name: `katsuraginagamasa`, //change with weapon name wihout space
        aliases: ["katsuragi" , "nagamasa", "katsu" ]
    }
