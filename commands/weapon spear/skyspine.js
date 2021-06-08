const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Skyward Spine")
    .addField("\u200B", "⧫ Type: " + "Polearm" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true)
    .addField("\u200B", "⧫ ATK: " + "48 (674)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge 8.0% (36.8%)", true)
    .addField("Passive Ability: Blackwing", "Increases CRIT Rate by 8~16% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vaccuum blade that deals 40~100% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.")
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Spine.png", 2, 2)
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/128?cb=20210413210804")
    .setFooter("Look for another? try ^list || Contributor: K R N ⊿₄₆") ;
  message.channel.send(embed);

    }       
    
    module.exports.help = {
        name: `skywardspine`,
        aliases: ["spine" , "skyspine", "ss"]
    }