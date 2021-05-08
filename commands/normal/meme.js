const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (Client, message, args, prefix) => { // for my cmds handler

    if(!message.content.startsWith(prefix)) return; // checking that the command starts with the prefix, if not return

    const subReddits = ["dankmeme", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Here some meme for you/${random}`)
    .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(embed);
}




module.exports.help = {
    name: "meme", // name of the cmd
    aliases: [] // another names for the cmd
}