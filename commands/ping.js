const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    var pingEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`A bot pingje: **${Math.round(bot.ws.ping)} MS**`)
    .setFooter("SkyLands | Ping")
    .setTimestamp();

    message.channel.send(pingEmbed)

}

module.exports.help = {
    name: "ping"
}