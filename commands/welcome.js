const Discord = require('discord.js');

module.exports = bot => {

    let channelID = '758231123867598869';

    bot.on('guildMemberAdd', (member) => {
        console.log(member)

        const Wmessage = `[»] Üdvözöllek a szerveren <@${member.id}>!`
        const welcomeChannel = member.guild.channels.cache.get(ChannelID);
        welcomeChannel.send(Wmessage);
    })
}

module.exports.help = {
    name: "welcome"
}