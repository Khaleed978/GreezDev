const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let mMember = message.mentions.users.first();
    let mReason = args.join(" ").slice(22);
    if(!mReason) mReason = "Nincs indok megadva!";
    let muterole = message.guild.roles.find(role => role.name === 'Muted');
    if(!muterole) {
        message.guild.roles.create({
            data:{
                name: 'Muted',
                color: 'RED'
            },
            reason: "Némítás rendszer"
        }).then(role=>{
                
            muterole = role;
                
            message.guild.channels.cache.forEach(channel=>{
                channel.overwritePermissions([
                    {
                        id: muterole.id,
                        deny: ["SEND_MESSAGES"]
                    }
            ], 'Némítás rendszer');
        });
                
        });
    }
    var errorEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Helytelen használat")
    .setDescription("Helyes használat: >mute @felhasználó indok")
    if(!mMember) return message.channel.send(errorEmbed);
        /*
        message.channel.overwritePermissions(mMember.id, {
            SEND_MESSAGES: false
        });
        */
    mMember.roles.add(muterole, mReason);
    mMember.send(`Némítva lettél a(z) **${message.guild.name}** szerveren! **${message.author.username}** némított le, indok: ${mReason}`);
    let mutedEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`**NÉMÍTÁS** | __${mMember}__ le lett némítva ${message.author} által | ___${mReason}___`);
    
    message.channel.send(mutedEmbed);

}

module.exports.help = {
    name: "mute"
}