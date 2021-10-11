const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**HIBA**| Nincs jogosultságod a parancs használatára! \n Szükséges jog. (`TAGOK KITILTÁSA`)");
    var kEmbed = new Discord.MessageEmbed()
    var error1Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: HIBA | Helytelen használat! >ban @felhasználó indok");
    
    let bannedMember = message.mentions.members.first();
    if(!bannedMember) return message.channel.send(error1Embed);
    let banReason = args.join(" ").slice(22);
    if(!banReason) banReason = "Nincs indok megadva!";
    
    
    var errorEmbed = new Discord.MessageEmbed() // mutatom :3
    .setColor("RED")// ez arra van ha rendelkezik a felhasználó permmel csak hát a permission check sem akart működni :c
    .setDescription(`:x: HIBA | A megemlített felhasználó, név szerint **${bannedMember}** rendelkezik __TAGOK KITILTÁSA__ jogosultsággal, ezért a kitiltás sikertelen!`);
    if(bannedMember.hasPermission("BAN_MEMBERS")) return message.channel.send(errorEmbed);
    setTimeout(function() {
        bannedMember.ban({reason: banReason}).then((bannedMember) => {
            var banEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setThumbnail(message.guild.iconURL)
            .setDescription(`K I T I L T Á S \n▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \t \t Kitiltott célszemély: **${bannedMember}** \n Parancsot végrehajtotta: **${message.author.username}** \n Az alábbi indokkal történt a kitiltás: **${banReason}**`)
            .setFooter("Tyrex bot | Kitiltás")
            .setTimestamp();

            message.channel.send(banEmbed);
        }).catch(() => {
            message.channel.send(errorEmbed);

        });
        message.delete().catch();
    }, 500);


}

module.exports.help = {
    name: "ban"
}