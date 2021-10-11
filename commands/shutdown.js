const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    if(message.author.id != "512337264303538187") return message.channel.send("A leállítási folyamat félbe szakadt, mivel nem te vagy a bot fejlesztője!");
    message.delete().catch();
    var sdEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("RED")
    .setDescription(`FIGYELEM!! A bot leállítása elkezdődött, pár másodpercbe telhet a leállás!`);
    
    const msg = await message.channel.send(sdEmbed)
    msg.react(':wave:');

    bot.destroy();
    
    process.exit(0);
}

module.exports.help = {
    name: "shutdown"
}