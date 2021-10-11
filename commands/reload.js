const Discord = require('discord.js');

module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    let command = args.join(" ");
    if(!command) return message.channel.send("Kérlek add meg annak a fájlnak a nevét, amelyiket újra szeretnéd indítani!");

    let commandName = command.toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
        message.channel.send(`:white_check_mark: Sikeresen újra lett indítva az alábbi fájl! (\`${command.toLowerCase()}.js\`)`);
    } catch(e) {
        message.channel.send(`HIBA | Nem sikerült újra indítani az alábbi fájlt! (\`${command.toLowerCase()}.js\`)`)
    }

   

}//mutatom c:

module.exports.help = {
    name: "reload"
}