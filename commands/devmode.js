const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async(bot,message,args,onevoneStats,devmode) => {
    message.delete().catch();
    if(message.author.id === "324288795954380812" || message.author.id === "481840148623917076" || message.author.id === "512337264303538187" ) {
        
        
        var devModeOnEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("<a:8740_developer_transparent:753651945905979494> | DEV MODE")
        .setDescription("A bot parancsai le vannak tiltva a felhasználók számára! Indok: Bot fejlesztés")
        .setFooter("A fejlesztői üzenmódot " + message.author.tag + " kapcsolta be!");
        var devModeOffEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("<a:8740_developer_transparent:753651945905979494> | DEV MODE")
        .setDescription("A bot parancsai újra elérhetőek a felhasználók számára!")
        .setFooter("A fejlesztői üzenmódot " + message.author.tag + " kapcsolta ki!");
        let fos = require('../devmode.json')

        console.log(devmode);
        if(devmode == 1) {
            fos.enabled = 0;
            console.log(fos.enabled);
            writeDevmodeJson(fos);
            message.channel.send(devModeOffEmbed);
        } else {
            fos.enabled = 1;
            console.log(fos.enabled);
            writeDevmodeJson(fos);
            message.channel.send(devModeOnEmbed);
        }
    } else {
        var noPermEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("<a:8740_developer_transparent:753651945905979494> | DEV MODE")
        .setDescription("Nincs jogod ehhez!")
        .setFooter("A parancsot " + message.author.tag + " próbálta használni");
        message.channel.send(noPermEmbed);
    }
    

}

async function writeDevmodeJson(data){
   fs.writeFileSync("../devmode.json", JSON.stringify(data), 'utf8');
}
function stringify (x) {
    
    return Object.prototype.toString.call(x);
}
module.exports.help = {
    name: "devmode"
}