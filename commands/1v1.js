const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
//tegyünk úgy mintha csak nem is létezne ez a komment c:
   
    if(!onevoneStats[message.guild.id]) onevoneStats[message.guild.id] = {
        "players": {
            
        }
    }
    if(!onevoneStats[message.guild.id].players[message.author.id]) onevoneStats[message.guild.id].players[message.author.id] = {
        "points": 0,
        "win": 0
    };

    onevoneStats[message.guild.id].players[message.author.id].points = onevoneStats[message.guild.id].players[message.author.id].points + 1;
    message.delete().catch();
    let fighter = message.author;
    let enemy = message.mentions.members.first();//imádom az ussr anthemet c:
   
    var helpEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Parancs: >1v1")
    .setDescription("Helyes használat - >1v1 (felhasználó) \n Példa - >1v1 @P4TR1K \n \n **LEÍRÁS** | Ezzel a paranccsal más személyeket tudsz 1v1-re hívni, ha megölöd +1 pontot kapsz!");
    if(!enemy) return message.channel.send(helpEmbed);
    if(fighter.id==enemy.id) return message.channel.send(helpEmbed);
    if(!onevoneStats[message.guild.id].players[enemy.user.id]) onevoneStats[message.guild.id].players[enemy.user.id] = {
        "points": 0,
        "win":0
    };
    let enPoints = onevoneStats[message.guild.id].players[message.author.id].points;
    //én felakasztom magam, megint le kell írnom azt a kurva hosszú szart
    //
    let win = false;
    let enemyPoints = onevoneStats[message.guild.id].players[enemy.id].points;
     //MIJÁUUU
    let playerPoints = onevoneStats[message.guild.id].players[message.author.id].points;
    let uwu = getRandomInt(1,3);
    if(uwu>2.5) win = false;
    if(uwu<2.5) win = true;
    let fightEmbed = new Discord.MessageEmbed();
    console.log({uwu,win,enemyPoints,playerPoints}); //
    if(win == true) {
        console.log({uwu,win,enemyPoints,playerPoints});
        onevoneStats[message.guild.id].players[message.author.id].win += 1;
        onevoneStats[message.guild.id].players[message.author.id].points += 1;
        if(onevoneStats[message.guild.id].players[enemy.id].points != 0) onevoneStats[message.guild.id].players[enemy.id].points -= 1;
        fightEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:hammer_pick: 1v1 játékmód | ${message.author.username} Vs. ${enemy.displayName}`)
        .setDescription(`**${message.author.username}** kihívta párbajra **${enemy.displayName}** felhasználót! \n  **${message.author.username}** erősebb volt, ezért legyőzte **${enemy.displayName}** nevű lelkes harcost! \n **${message.author.username}** szerzett 1 pontot! (${[onevoneStats[message.guild.id].players[message.author.id].points-1]}+1)`);
    
    } else {
        console.log({uwu,win,enemyPoints,playerPoints});
        onevoneStats[message.guild.id].players[enemy.id].win += 1;// AKKOR CIA sry caps c: CAPS OFF bedzárok nyeked mindent c:
        if(onevoneStats[message.guild.id].players[message.author.id].points != 0) onevoneStats[message.guild.id].players[message.author.id].points -= 1;
        onevoneStats[message.guild.id].players[enemy.id].points += 1;
        fightEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:hammer_pick: 1v1 játékmód | ${message.author.username} Vs. ${enemy.displayName}`)
        .setDescription(`**${message.author.username}** kihívta párbajra **${enemy.displayName}** felhasználót! \n  **${enemy.displayName}** erősebb volt, ezért legyőzte **${message.author.username}** nevű lelkes harcost! \n **${enemy.displayName}** szerzett 1 pontot! (${[onevoneStats[message.guild.id].players[enemy.id].points-1]} pontja van)`);
        //háp-háp-háp
    }

    message.channel.send(fightEmbed);
}

module.exports.help = {
    name: "1v1",
    cooldown: 5
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }