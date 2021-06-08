const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Blackcliff Pole")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Starglitter Exchange" , true)
    .addField("\u200B", "⧫ ATK: " + "42 (510)" + "\r\n ⧫ 2nd Stat: " + "CRIT DMG 12.0% (55.1%)", true)
    .addField("Passive Ability: Press the Advantage", "After defeating an opponent, ATK is increased by 12~24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Pole.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `blackcliffpole`,
        aliases: ["bp" , "blackpole", "BP"]
    }