const ms = require('ms');
const Discord = require('discord.js');


module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("HIBA | Nincs jogosultságod a parancs használatára!");

    if(!args[0]) return message.channel.send("HIBA | Add meg a nyereményjáték ID-ját!");
    
    let giveaway = bot.GiveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || bot.GiveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    if(!giveaway) return message.channel.send("HIBA | Nem található nyereményjáték ezzel az ID-val!");

    bot.GiveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send("Nyereményjáték újra sorsolva!");
    })
    .catch((e) => {
        if(e.startsWith(`A nyereményjáték nem ért véget!`)){
            message.channel.send("A nyereményjáték még nem ért véget!")
        } else {
            console.log(e);
            message.channel.send("Hiba történt!")
        }
    })
}


module.exports.help = {
    name: "reroll"
}