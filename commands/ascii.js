const Discord = require('discord.js');
const figlet = require('figlet');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let uzenet = args.join(" ");
    if(!uzenet) return message.channel.send("Adj meg 1 szöveget vagy szót!");

    figlet(`${uzenet}`, function(err, data) {
        if (err) {
            console.log("Hiba történt!");
            console.dir(err);
            return;
        }
        message.channel.send("``` \n " + data + " \n ```");
    })

}

module.exports.help = {
    name: "ascii"
}