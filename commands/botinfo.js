const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    function duration(ms) {
        const mp = Math.floor((ms / 1000) % 60).toString()
        const p = Math.floor((ms / (1000 * 60)) % 60).toString()
        const ó = Math.floor((ms / (1000 * 60 *60)) % 60).toString()
        const n = Math.floor((ms / (1000 * 60 *60 * 24)) % 60).toString()
        return `${n.padStart(1, '0')} nap : ${ó.padStart(2, '0')} óra : ${p.padStart(2, '0')} perc : ${mp.padStart(2, '0')} másodperc`


    }
    var infoEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(":notepad_spiral: | A bot információi ")
    .setThumbnail("https://media.discordapp.net/attachments/566694066658476042/827216577002864680/skylands.png?width=368&height=423")
    .setDescription(`Bot neve: **${bot.user.tag}** \n \nProgramozási nyelv: **JavaScript** \n \nBot prefixe: **>** \n \nBot futási ideje: **${duration(bot.uptime)}**\n \nBot Developers: Khaleed_,P4TR1K`)
    .setFooter("SkyLands | Információk")
    .setTimestamp();
    message.channel.send(infoEmbed);

}

module.exports.help = {
    name: "botinfo"

}