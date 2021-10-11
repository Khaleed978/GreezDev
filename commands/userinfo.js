const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let uMember = message.mentions.users.first();
    let uMember2 = message.mentions.members.first();
    if(!uMember) uMember = message.author;
    if(!uMember2) uMember2 = message.member;
    let userlm = uMember.lastMessage;
    if(!userlm) userlm = "Nem üzent semmit a felhasználó!";
    let userlmID = uMember.lastMessageID;
    if(!userlmID) userlmID = "Nem üzent semmit a felhasználó, ezért nem tudom az üzenet ID-t lekérni!";
    
    let statusz = uMember.presence.status;
    let hehe = "hihike";
    if(statusz == "dnd") hehe="elfoglalt";
    if(statusz == "idle") hehe="távol";// kell még ebbe valami? XD
    if(statusz == "offline") hehe="nem elérhető";
    if(statusz == "online") hehe="elérhető"; 
    let game = uMember.presence.game;
    if(!game) game = "Nem játszik semmilyen programmal!";
    let botaaa = uMember.bot;
    if(botaaa == false) botaaa = "nem";
    if(botaaa == true) botaaa = "igen";
    let rolestest = uMember2.roles;
    let roles = [];
    rolestest.cache.forEach(role => {
        let everyoneid = message.guild.roles.everyone.id; //oh
        if(role.id != everyoneid) roles.push("<@&" + role.id + ">");
    });
    console.log(roles);
    var userEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`:notepad_spiral: ${uMember.username} adatai`)
    .setThumbnail(uMember.avatarURL())
    .setDescription(`# | Felhasználó tagje: **${uMember.tag}** \n# | Felhasználó ID: **${uMember.id}** \n# | Felhasználó állapota: **${hehe}** \n# | Felhasználó ezzel játszik: **${game}** \n# | A felhasználó utolsó üzenete: **${userlm}** \n# | A felhasználó utolsó üzenetének az ID-ja: **${userlmID}** \n# | A felhasználó bot-e? **${botaaa}** \n# | A felhasználó rangjai: **${roles}**`);

    message.channel.send(userEmbed);//nyami

}


module.exports.help = {
    name: "userinfo",
    uwumeter: "Egy piwwanat adok egy zenét ami jó c: c:"
}