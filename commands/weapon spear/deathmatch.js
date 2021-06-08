const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Deathmatch")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "BP Bounty" , true)
    .addField("\u200B", "⧫ ATK: " + "41 (454)" + "\r\n ⧫ 2nd Stat: " + "CRIT Rate 8.0% (36.8%)", true)
    .addField("Passive Ability: Gladiator", "If there are at least 2 opponents nearby, ATK is increased by 16~32% and DEF is increased by 16~32%. If there are fewer than 2 opponents nearby, ATK is increased by 24~48%.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Deathmatch.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `deathmatch`,
        aliases: ["dm","death"]
    }