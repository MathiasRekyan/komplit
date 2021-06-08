const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
                                            
    const embed = new Discord.MessageEmbed()
    .setTitle("Skyward Pride")
    .addField("\u200B", "⧫ Type: " + "Claymore" + "\r\n ⧫ Rarity: " + "⭐⭐⭐⭐⭐" + "\r\n ⧫ Location: " + "Gacha" , true) //change the "Weapon Name", "Rarity", and "Location"
    .addField("\u200B", "⧫ ATK: " + "48 (max 674)" + "\r\n ⧫ 2nd Stat: " + "Energy Recharge+ 8% (max 36.8%)", true) //Fill the ... (fill the 2nd stat with max lvl too)
    .addField("Passive Ability: Sky-ripping Dragon Spine", "Increases all DMG by 8/10/12/14/16%. After using an Elemental Burst, Normal or Charged Attack, on hit, creates a vacuum blade that does 80/100/120/140/160% Physical DMG to enemies along its path. Lasts for 20s or 8 vacuum blades.") //change the Skill Name, And Skill description (passive ability)
    .setImage("https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Pride.png", 2, 2) //fill with image of the weapon if u want 
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803")
    .setFooter("Look for another? try ^list") ;
    message.channel.send(embed);
                                            
    }
                        
    module.exports.help = {
        name: `SkywardPride`, //change with weapon name wihout space
        aliases: ["Skywardpride" , "skywardpride" , "sp"]
    }