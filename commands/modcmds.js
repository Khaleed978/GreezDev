const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    var prefix = ">";

    let modEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("**Moderációs parancsok**")
    .setThumbnail("https://media.discordapp.net/attachments/566694066658476042/827216577002864680/skylands.png?width=368&height=423")
    .setDescription(`Kirúgás | **${prefix}kick @felhasználó indok** \nKitiltás | **${prefix}ban @felhasználó indok** \nNémítás | **${prefix}mute @felhasználó indok** \nMegadott csatornába EMBED üzenet küldés | **${prefix}cembedsay #csatorna üzenet** \nCsatorna zárolása | **${prefix}channellock be/ki** \nÜzenetek törlése | **${prefix}clear mennyiség** \nMegadott csatornába való üzenet küldés | **${prefix}csay #csatorna üzenet** \nPrivát üzenet küldés | **${prefix}dmsay @felhasználó üzenet** \nEMBED üzenet küldés | **${prefix}embedsay #üzenet** \nCsatorna teljes tartalmának törlése | **${prefix}nuke** \nSzavazás | **${prefix}poll** \nÜzenet küldés | **${prefix}say üzenet** \nLassított üzenmód | **${prefix}slowmode másodperc** \nKitiltás feloldása | **${prefix}unban ID** \nNémítás feloldása | **${prefix}unmute @felhasználó**`)
    .setFooter("SkyLands | Moderációs parancsok")
    .setTimestamp();

    message.channel.send(modEmbed);
}

module.exports.help = {
    name: "modcmds"
}