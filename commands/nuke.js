const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    if(!message.author.id === "481840148623917076" || !message.author.id === "324288795954380812") return message.channel.send("HIBA | Ezt a parancsot, csak a bot fejlesztői használhatják!");
    var nukedEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("RED")
    .setTitle(`A csatorna összes tartalma törölve lett ${message.author.username} által!`)
    .setImage("https://media1.tenor.com/images/2e50750a1356ee2cf828090cbb864634/tenor.gif?itemid=4464831");
    var nukeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`Biztos, hogy törölni szeretnéd a csatorna ÖSSZES tartalmát? ${message.author} \n Ha törölni szeretnéd írdd ki a chatre, hogy __>nuke igen__, ha nem, akkor azt írdd a chatre, hogy __>nuke nem__!`);
    let ignem = args.join(" ");
    if(!ignem) return message.channel.send(nukeEmbed);
    
    if(ignem === "igen") {
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);
        message.channel.bulkDelete(100);// A SZART NEMXDD
        message.channel.send(nukedEmbed);
    }
    if(ignem === "nem") {
        var notNuked = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Ahogy látom, nem szeretnéd törölni a csatorna ÖSSZES tartalmát. Ha egy bizonyos üzenet mennyiséget szeretnél törölni, akkor a **>clear <mennyiség>** paranccsal megteheted!`);

        message.channel.send(notNuked);
    }
    if(!ignem === "igen" || !ignem === "nem") {
        var wrongEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("HIBA | Csak és kizárólag `igennel` vagy `nemmel` válaszolhatsz!");

        message.channel.send(wrongEmbed);
    }
}

module.exports.help = {
    name: "nuke"
}