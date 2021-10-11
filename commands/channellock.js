const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" HIBA | Nincs jogosultságod a parancs használatához!");
    let options = args.join(" ");
    if(options == "be") {

        message.channel.overwritePermissions([
            {
                id: message.guild.id,
                deny: ["SEND_MESSAGES"]
            }
        ]);
        var onEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:4575_no_x:754351485042819142> | A csatorna zárolás aktív, ezért a csatornán nem lehet kommunikálni! \n A zárolás oka: Nem megfelelő chat használat! \n A zárolást **` + message.author.username + `** aktiválta!`);

        message.channel.send(onEmbed);
    }
    if(options == "ki") {

        message.channel.overwritePermissions([
            {
                id: message.guild.id,
                allow: ["SEND_MESSAGES"]
            }
        ]);
        var offEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("A csatorna zárolása fel lett oldva **" + message.author.username + "** által!");
    }
}

module.exports.help = {
    name: "channellock"
}