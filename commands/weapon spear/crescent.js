const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Crescent Pike")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Crafting" , true)
    .addField("\u200B", "⧫ ATK: " + "44 (565)" + "\r\n ⧫ 2nd Stat: " + "Phys DMG Bonus 7.5% (34.5%)", true)
    .addField("Passive Ability: Infusion Needle", "After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal an additional 20~40% ATK as DMG for 5s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Crescent_Pike.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `crescentpike`,
        aliases: ["cp", "crescent"]
    }