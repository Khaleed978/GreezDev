const ms = require('ms');
const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("HIBA | Nincs jogosultságod a parancs használatára! (`ADMINISTRATOR`)");

    let giveChannel = message.mentions.channels.first();
    if(!giveChannel) return message.channel.send("HIBA | Kérlek add meg, hogy melyik csatornában szeretnéd megjeleníteni a nyereményjátékot!");

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("HIBA | Kérlek add meg, hogy mennyi ideig tartson a nyereményjáték!");

    let giveawayWinners = args[2];
    if(isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send("HIBA | Kérlek add meg, hogy hány győztes legyen a nyereményjáték során!");

    let giveawayPrize = args.slice(3).join(" ");
    if(!giveawayPrize) return message.channel.send("HIBA | Kérlek add meg a nyereményt!");

    bot.GiveawaysManager.start(giveChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayWinners,
        hostedBy: bot.config.hostedBy ? message.author : null,
        messages: {
            giveaway: (bot.config.everyoneMention ? "@everyone\n\n" : "") + "▬▬▬▬▬▬▬▬▬▬▬▬▬ \n:tada: NYEREMÉNYJÁTÉK :tada: \n▬▬▬▬▬▬▬▬▬▬▬▬▬",
            giveawayEnded: (bot.config.everyoneMention ? "@everyone\n\n" : "") + " ▬▬▬▬▬▬▬▬▬▬▬▬▬ \nNYEREMÉNYJÁTÉK VÉGE \n▬▬▬▬▬▬▬▬▬▬▬▬▬",
            timeRemaining: "Nyereményjáték végéig: **{duration}**",
            inviteToParticipate: "Reagálj a :tada: emotikonra, hogy jelentkezz a nyereményjátékra",
            winMessage: "Gratulálok {winners}, te nyerted meg a nyereményjátékot! A jutalmad: {prize}",
            embedFooter: "Nyeremenyjatek",
            noWinner: "Nincs győztese a nyereményjátéknak!",
            hostedBy: "A nyereményjátékot indította: {user}",
            winners: " nyertes",
            endetAt: "A nyereményjáték véget ér: ",
            units: {
                seconds: "másodperc",
                minutes: "perc",
                hours: "óra",
                days: "nap",
                pluralS: false

            }
        }
    })

    message.channel.send(`A nyereményjátékot elindítottad a ${giveChannel} csatornán!`);

}

module.exports.help = {
    name: "giveaway"
}