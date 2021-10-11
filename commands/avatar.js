const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let user = message.mentions.users.first()
    if(!user) user = message.author;
    let member = message.mentions.members.first()
    if(!member) member = message.author;
    message.delete().catch();
    var avatarEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(`:diamond_shape_with_a_dot_inside: | ` + user.username + ` discord profilképe!`)
    .setImage(user.avatarURL())
    .setFooter("Tyrex bot | Avatar")

    message.channel.send(avatarEmbed);
}


module.exports.help = {
    name: "avatar"
}