const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("HIBA | Nincs jogod ahhoz, hogy használd a parancsot! **_ÜZENETEK KEZELÉSE_**");
    let themes = args.join(" ");

    var errorEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: Helytelen használat! Helyes használat: **>poll téma**");

    if(!themes) return message.channel.send(errorEmbed);

    var pollEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("SZAVAZÁS | TYREX")
    .setThumbnail("https://cdn.discordapp.com/attachments/808959462785417216/816642086891814913/tyrexlogo.png")
    .setThumbnail(message.guild.iconURL)
    .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n **${themes}** \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ `)
    .setFooter("Tyrex bot | Szavazás")
    .setTimestamp();

    const msg = await message.channel.send(pollEmbed);
    msg.react(`a:rgb_arrow_up:754351781835964476`);
    msg.react(`a:rgb_arrow_down:754351812630282312`);
}

module.exports.help = {
    name: "poll"
}