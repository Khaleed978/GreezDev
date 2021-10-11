const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    
    let ellenorzSzint = {
        "NONE": "Nincs",
        "LOW": "Alacsony",
        "MEDIUM": "Közepes ( う-´)づ",
        "HIGH": "Magas (╯°□°）╯︵ ┻━┻",
        "VERY_HIGH": "Magasabb ┻━┻ ︵ヽ(`□´)ﾉ︵ ┻━┻"
    };
    let region = {
        "brazil": ":flag_br: Brazília",
        "europe": ":flag_eu: Európa",
        "eu-central": ":flag_eu: Közép-Európa",
        "eu-west": ":flag_eu: Nyugat-Európa",
        "singapore": ":flag_sg: Szingapúr",
        "us-central": ":flag_us: Egyesült Államok",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Egyesült Államok",
        "us-south": ":flag_us: Egyesült Államok",
        "us-west": ":flag_us: Egyesült Államok",
        "vip-us-east": ":flag_us: Egyesült Államok (VIP)",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amszterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Oroszország",
        "southafrica": ":flag_za: Afrika"
    };
        let tagok = message.guild.members.cache.filter(member => !member.user.bot).size;
        var serverinfoEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(":newspaper: | A szerver információi")
            .setThumbnail(message.guild.iconURL)
            .addField("Szerver neve", message.guild.name)
            .addField("Szerver régió", region[message.guild.region] + "(" + message.guild.region + ")", true)
            .addField("Vanity URL", message.guild.vanityURLCode || "Nincs", true)
            .addField("Ellenőrzési szint", ellenorzSzint[message.guild.verifycationLevel], true)
            .addField("Szerver tulajdonos", "<@!" +  message.guild.ownerID + ">", true)
            .addField("Tagok száma", tagok, true)
            .addField("Botok száma", message.guild.members.cache.filter(member => member.user.bot).size, true)
            .addField("Teljes létszám", message.guild.members.cache.size, true)
            .addField("Rangok száma", message.guild.roles.cache.size, true)
            .addField("Szerver létrehozási ideje", message.channel.guild.createdAt.toUTCString().substr(0, 16), true)
            .setFooter("Origin | Szerver információk | Developer Khaleed_")
            .setTimestamp();


            message.channel.send(serverinfoEmbed);
}

module.exports.help = {
    name: "serverinfo"
}