const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let channels = message.guild.channels;
    let voice = 0;
    let text = 0;
    let category = 0;
    channels.cache.forEach(channel => {
        if(channel.type === "voice") voice++;
        if(channel.type === "text") text++;
        if(channel.type === "category") category++;
    })
    
    console.log({voice,text,category})
    var typeEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Csatorna típusok")
    .setDescription(`Csatorna kategóriák száma: **${category}** \n Hang csatornák száma: **${voice}** \n Szöveges csatornák száma: **${text}**`);

    message.channel.send(typeEmbed);
 }

module.exports.help = {
    name: "channelcategory"
}