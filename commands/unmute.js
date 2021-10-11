const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let unmutedMember = message.mentions.users.first();
    let muterole = message.guild.roles.find(role => role.name === 'Muted');
    var unmEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: HIBA | A helyes használathoz írd be a **>help unmute** parancsot!`);
    if(!unmutedMember) return message.channel.send(unmEmbed);
    var successEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**${unmutedMember.username}** némítása fel lett oldva **${message.author.username}** által!`);

    message.channel.send(successEmbed);
    unmutedMember.roles.remove(muterole); 
    /* 
    - Mi esik ott kint, tanárnő?
    - Hó, Pistike.
    - Há' ott kint.
    */
}

module.exports.help = {
    name: "unmute"
}