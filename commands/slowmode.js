const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("HIBA | Nincs jogosultságod a parancs használatára! **_Csatornák kezelése_**");
    let sec = args.join(" ");
    if(!sec) return message.channel.send("HIBA | Add meg, hogy mennyi másodperc legyen a lassított üzenmód!");
    if(isNaN(sec)) return message.channel.send("HIBA | Kérlek számot adj meg!");
    if(sec > 21600) return message.channel.send("HIBA | Nem adhatsz meg **21600** másodpercnél többet!");
    message.channel.setRateLimitPerUser(sec)
    message.channel.send("<a:6181_check:755108636635824158> Sikeresen bekapcsoltad a lassított üzenmódot! ( **" + sec + "** mp )");
    

}

module.exports.help = {
    name: "slowmode"
}