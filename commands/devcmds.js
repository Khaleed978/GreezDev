const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    var prefix = ">";
    var devcmds = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Fejlesztői parancsok")
    .setThumbnail("https://media.discordapp.net/attachments/566694066658476042/827216577002864680/skylands.png?width=368&height=423")
    .setDescription(`Fájl újra töltése | **${prefix}reload** \nBot leállítása | **${prefix}shutdown** \nFejlesztői mód bekapcsolása | **${prefix}devmode**`)
    .setFooter("SkyLands | Fejlesztői Parancsok")
    .setTimestamp();

    message.channel.send(devcmds);
}

module.exports.help = {
    name: "devcmds"
}