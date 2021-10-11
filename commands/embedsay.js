const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("HIBA | Nincs jogod ahhoz, hogy használd a parancsot! **_ÜZENETEK KEZELÉSE_**");
    let uzenet = args.join(" ");
    var errorEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: HIBA | Helytelen használat! Helyes használat: **>embedsay üzenet**");

    if(!uzenet) return message.channel.send(errorEmbed);
    var sayEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**_${message.author.username}_** :incoming_envelope: ${uzenet}`);

    message.channel.send(sayEmbed);
}

module.exports.help = {
    name: "embedsay"
}
