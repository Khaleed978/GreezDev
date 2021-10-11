const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("HIBA | Nincs jogod ahhoz, hogy használd a parancsot! **_ÜZENETEK KEZELÉSE_**");
    let uzenet = args.join(" ").slice(22);
    var errorEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: HIBA | Helytelen használat! Helyes használat: **>dmsay @felhasználó üzenet**");
    if(!uzenet) return message.channel.send(errorEmbed);
    let dmMembers = message.mentions.users.first();
    let dmRoles = message.mentions.roles.first();
    
    if(!dmMembers && !dmRoles) return message.channel.send(errorEmbed);
    if(dmMembers){
        dmMembers.send(`Helló kedves **${dmMembers.username}**! Kaptál 1 üzenetet! \n **_${message.author.username}_** :incoming_envelope: ${uzenet}`);
        message.author.send(`Az üzeneted sikeresen elküldtük ${dmMembers.username} felhasználónak! Az üzeneted: **${uzenet}**`);
    } else {
        let membersWR = message.guild.roles.get(dmRoles.id).members;
        let membernameList = [];
        membersWR.forEach(memberxd => {
            memberxd.send(`Helló kedves **${memberxd.user.username}**! Kaptál 1 üzenetet! \n **_${message.author.username}_** :incoming_envelope: ${uzenet}`);
            membernameList.push(memberxd.user.username);
        });
        message.channel.send(`Az üzeneted sikeresen elküldtük ${membernameList} felhasználó(k)nak! Az üzeneted: **${uzenet}**`);
    }
}

module.exports.help = {
    name: "dmsay"
}