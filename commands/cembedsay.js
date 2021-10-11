const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let embedChannel = message.mentions.channels.first();
    if(!embedChannel) return message.channel.send("HIBA | Kérlek add meg, hogy melyik csatornába szeretnéd küldeni az üzeneted!");
    let embedUzenet = args.join().slice(22);
    if(!embedUzenet) return message.channel.send("HIBA | Kérlek adj meg 1 üzenetet!");
    
    var cembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`${message.author.username} => ${embedChannel.name}`)
    .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.fXu0GBKbtrUmjNTZPdEEYgHaHa&pid=Api&P=0&w=300&h=300")
    .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n :incoming_envelope: **${embedUzenet}**`)
    .setFooter(`Az üzenet a ${message.channel.name} csatornából lett küldve!`);

    embedChannel.send(cembed);
    message.channel.send(`<a:6943_Check_Mark:754351739569701044> Sikeresen elküldtem az üzeneted a ${embedChannel} csatornába! (${message.author}) `)
}

module.exports.help = {
    name: "cembedsay"
}