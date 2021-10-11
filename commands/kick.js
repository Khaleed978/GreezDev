const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**HIBA**| Nincs jogosultságod a parancs használatára! \n Szükséges jog. (`TAGOK KIRÚGÁSA`)");
    var error1Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: HIBA | Helytelen használat! Helyes használat: >kick @felhasználó indok");
    let kickedMember = message.mentions.members.first();
    if(!kickedMember) return message.channel.send(error1Embed);
    let kickReason = args.join(" ").slice(22);
    if(!kickReason) kickReason = "Nincs indok megadva!";
    
    
    var errorEmbed = new Discord.MessageEmbed() // mutatom :3
    .setColor("BLUE")// ez arra van ha rendelkezik a felhasználó permmel csak hát a permission check sem akart működni :c
    .setDescription(`:x: HIBA | A megemlített felhasználó, név szerint **${kickedMember}** rendelkezik __TAGOK KIRÚGÁSA__ jogosultsággal, ezért a kirúgás sikertelen!`);
    if(kickedMember.hasPermission("KICK_MEMBERS")) return message.channel.send(errorEmbed);
    setTimeout(function() {
        kickedMember.kick(kickReason).then((kickedMember) => {
            var kickEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setThumbnail(message.guild.iconURL)
            .setDescription(`K I R Ú G Á S \n▬▬▬▬▬▬▬▬▬▬▬▬▬ \n Kirúgott célszemély: **${kickedMember}** \n Parancsot végrehajtotta: **${message.author.username}** \n Az alábbi indokkal történt a kirúgás: **${kickReason}**`)

            message.channel.send(kickEmbed);
            kickedMember.send(`Ki lettél rúgva a(z) **${message.guild.name}** szerverről! Indok: **${kickReason}**`);

        }).catch(() => {
            message.channel.send(errorEmbed);

        });
        message.delete().catch();
    }, 500);


}

module.exports.help = {
    name: "kick"
}