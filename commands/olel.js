const Discord = require('discord.js');
const lovegifs = ["https://media.tenor.com/images/4294deb5ec97086243174b085d609695/tenor.gif", "https://media.tenor.com/images/af19e2de76614755c5926c505f7ccaa1/tenor.gif"]
module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    //cólj ha itt vagy
    message.delete().catch();
    let mentionedMember = message.mentions.members.first() || message.guild.members.get(args.join(" "));
    if(!mentionedMember) return message.channel.send("Jelölj meg valakit!");
    let lovegif = lovegifs[Math.floor(Math.random()*lovegifs.length)];
    var olelEmbed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`${message.author.username} megölelte ${mentionedMember.user.username}-t!`)
    .setImage(lovegif);

    message.channel.send(olelEmbed);
}

module.exports.help = {
    name: "olel"
}