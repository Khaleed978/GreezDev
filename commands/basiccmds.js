const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let prefix = ">";

    var basicEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Alap parancsok")
    .setThumbnail("https://media.discordapp.net/attachments/566694066658476042/827216577002864680/skylands.png?width=368&height=423")
    .setDescription(`Felhasználó profilképe | **${prefix}avatar @felhasználó** \nBot információk | **${prefix}botinfo** \nCsatorna kategóriák | **${prefix}channelcategory** \nDiscord meghívó linkek | **${prefix}discord** \nBot pingje | **${prefix}ping** \nSzerver információk | **${prefix}serverinfo** \nA bot futási ideje | **${prefix}uptime** \nFelhasználó információk | **${prefix}userinfo @felhasználó**`)
    .setFooter("SkyLands | Alap parancsok")
    .setTimestamp();

    message.channel.send(basicEmbed);
}

module.exports.help = {
    name: "basiccmds"
}