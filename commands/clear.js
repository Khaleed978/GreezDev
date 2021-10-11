const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    const argi = message.content.split(' ').slice(1);
    const amount = args.join(' ');
    if (message.deletable) message.delete();
    var errorEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(":x: HIBA | Helytelen használat! Helyes használat: **>clear mennyiség**");
    if (!amount) return message.channel.send(errorEmbed);
    if (isNaN(amount)) return message.channel.send(errorEmbed);

    if (amount > 100) return message.channel.send('> Nem törölhetsz száznál több üzenetet! (' + message.author + ")").then(m => m.delete(5000));
    if (amount < 1) return message.channel.send('> Minimum 1 üzenetet kell törölni... (' + message.author + ")").then(m => m.delete(5000));

    message.channel.messages.fetch({
        limit: amount,
    }).then((messages) => {

        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));

        message.channel.send(`:white_check_mark: Sikeresen törölve lett **${amount}** üzenet!`).then(m => m.delete(5000));
    });


}

module.exports.help = {
    name: "clear"
}