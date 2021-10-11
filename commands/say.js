const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let uzenet = args.join(" ");
    var errorEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: HIBA | Helytelen használat! Helyes használathoz írd be a **>help say** parancsot!");
    if(!uzenet) return message.channel.send(errorEmbed);
    message.channel.send(`**_${message.author.username}_** :incoming_envelope: ${uzenet}`);


}

module.exports.help = {
    name: "say"
}