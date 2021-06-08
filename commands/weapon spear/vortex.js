const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Vortex Vanquisher")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "46 (608)" + "\r\n ⧫ 2nd Stat: " + "ATK 10.8% (49.6%)", true)
    .addField("Passive Ability: Golden Majesty", "Increases Shield Strength by 20~40%. Scoring hits on opponents increases ATK by 4~8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Vortex_Vanquisher.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `vortexvanquisher`,
        aliases: ["vortex" , "vanquisher", "vv"] 
    }