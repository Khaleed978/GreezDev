const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    let valasz = [" Igen! ", " Nem! ", " Nem tudom! ", " Lehetséges! ", " Kérdezz meg később! ", " Meglehet... ", " Előfordulhat.. ", " Talán. ", " Dehogy! ", " Jaja ", " \*Tescos gazdaságos kisípolás\* ", " Szerintem igen. ", " Megkérdezem egy barátomat. "];
    let eredmeny = Math.floor((Math.random() * valasz.length))
    let kerdes = args.join(" ");
    if(!kerdes) kerdes = "Nincs kérdés megadva!";
    var kfEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("BLUE")
    .setTitle(":twisted_rightwards_arrows: KÉRDEZZ-FELELEK")
    .setDescription(` » Kérdésed: **${kerdes}** \n » Válaszom: **${valasz[eredmeny]}** \n \n \n <:warningX:755404365073743983> **FIGYELEM!!!** A bot **csak** **${valasz}** válaszokat tud adni!`);

    const msg = await message.channel.send(kfEmbed)
    msg.react(':XD:755400035558097028');

}

module.exports.help = {
    name: "kf"
}