const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Freedom Sworn")
    .addField("\u200B", "⧫ Type: " + "Sword" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "46 (max 608)" + "\r\n ⧫ 2nd Stat: " + "\r\n Elemental Mastery+ 43 (max 198)", true)
    .addField("\r\n Passive Ability: Revolutionary Chorale, A part of the Millennial Movement that wanders amidst the winds. Increases DMG by 10/12.5/15/17.5/20%.", true)
    .addField("\u200B","\r\n When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion.", true)
    .addField("\u200B","\r\n This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field When you possess 2 Sigils of Rebellion,", true)
    .addField("\u200B","\r\n all of them will be consumed and all nearby party members will obtain Millennial Movement: Song of Resistance for 12s.", true)
    .addField("\u200B","\r\n Millennial Movement: Song of Resistance increases Normal, Charged, and Plunging Attack DMG by 16/20/24/28/32% and increases ATK by 20/25/30/35/40% Once this effect is triggered,", true)
    .addField("\u200B","\r\n you will not gain Sigils of Rebellion for 20s. Of the many effects of the Millennial Movement, buffs of the same type will not stack.", true)
    .setImage("https://static.wikia.nocookie.net/gensin-impact/images/3/39/Weapon_Freedom-Sworn.png/revision/latest/scale-to-width-down/256?cb=20210629202549", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/128?cb=20210413210800")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `freedomsworn`,
        aliases: ["freedom", "freedomsword", "pedangkazuha"]
    }
