const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                                                
    const embed = new Discord.MessageEmbed()
    .setTitle("Song of Broken Pines")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "49 (max 741)" + "\r\n ⧫ 2nd Stat: " + "Physical DMG Bonus+ 4.5% (max 20.7%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Rebel's Banner Hymn", "A part of the 'Millennial Movement' that wanders amidst the winds. Increases ATK by 16/20/24/28/32%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s.When you possess four Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the 'Millennial Movement: Banner-Hymn' effect for 12s. 'Millennial Movement: Banner-Hymn' increases Normal ATK SPD by 12/15/18/21/24% and increases ATK by 20/25/30/35/40%.Once this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the 'Millennial Movement', buffs of the same type will not stack.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Song_of_Broken_Pines.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                                                
    }
                            
    module.exports.help = {
        name: `Song of Broken Pines`, //change with weapon name wihout space
        aliases: ["Songofbrokenpines" , "songofbrokenpines" , "song" , "pines", "sobp"]
    }