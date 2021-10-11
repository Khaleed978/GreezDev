const Discord = require('discord.js');
const { text } = require('figlet');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let textChannel = message.mentions.channels.first();
    if(!textChannel) return message.channel.send("HIBA | Nem adtad meg, hogy melyik csatornában szeretnéd elküldeni az üzeneted!");

    let uzenet = args.join(" ").slice(22);
    if(!uzenet) return message.channel.send("HIBA | Kérlek adj meg egy üzenetet!");
    
    textChannel.send(`(**${message.channel}**) **__${message.author.username}__** :incoming_envelope: **${uzenet}**`);
    message.channel.send(`<a:6943_Check_Mark:754351739569701044> Sikeresen elküldtem az üzeneted a ${textChannel} csatornába! (${message.author}) `);
}

module.exports.help = {
    name: "csay"
}