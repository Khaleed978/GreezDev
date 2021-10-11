const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    function duration(ms) {
        const mp = Math.floor((ms / 1000) % 60).toString()
        const p = Math.floor((ms / (1000 * 60)) % 60).toString()
        const ó = Math.floor((ms / (1000 * 60 *60)) % 60).toString()
        const n = Math.floor((ms / (1000 * 60 *60 * 24)) % 60).toString()
        return `${n.padStart(1, '0')} nap : ${ó.padStart(2, '0')} óra : ${p.padStart(2, '0')} perc : ${mp.padStart(2, '0')} másodperc`


    }

    var onlineEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`Ennyi ideje vagyok online: ${duration(bot.uptime)}`)

    message.channel.send(onlineEmbed);

}

module.exports.help = {
    name: "uptime"
}