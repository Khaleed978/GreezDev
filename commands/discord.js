const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    var discordEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Discord Szerverünk")
    .setDescription(`Fő szerverünk meghívó linkje: [Katt Ide!(https://discord.gg/Cxh9eS9gdR)] \nSupport szerver meghívó linkje: **Még nincs**`)
    .setFooter("SkyLands | Meghívó link")
    .setTimeStamp();


    message.channel.send(discordEmbed);

}

module.exports.help = {
    name: "discord"
}