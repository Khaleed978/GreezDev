const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode,prefix) => {
    var prefix = ">";
    
    let commandsEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Greez Parancsok")
    .setThumbnail("https://cdn.discordapp.com/attachments/808959462785417216/822184827394326558/skylands.png")
    .setDescription(`**KATEGÓRIÁK**: \n \n Moderációs parancsok: **${prefix}modcmds** \n \n Alap parancsok: **${prefix}basiccmds** \n \n Zene parancsok: **${prefix}musiccmds** \n \n Fejlesztői parancsok: **${prefix}devcmds**`)
    .setFooter("Greez | Parancsok")
    .setTimestamp();

    message.channel.send(commandsEmbed);

}

module.exports.help = {
    name: "commands"
}