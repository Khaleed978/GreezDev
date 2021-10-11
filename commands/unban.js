const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let unbannedMember = args.join(" ");
    if(!unbannedMember) return message.channel.send("HIBA | Kérlek add meg annak a felhasználónak az ID-ját, akit fel szeretnél oldani a kitiltás alól!");

    try {
        message.guild.fetchBans().then(bans => {
            message.guild.members.unban(unbannedMember)
        })
        await message.channel.send(`<a:6181_check:755108636635824158> **${unbannedMember.displayName}** sikeresen fel lett oldva a kitiltás alól **${message.author.username}** által!`);
    } catch(e) {
        message.channel.send("HIBA | Hiba lépett fel a parancs végrehajtásakor! Kérlek ellenőrizd, hogy a felhasználó ki van-e tiltva!");
    }
}


module.exports.help = {
    name: "unban"
}