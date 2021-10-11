const Discord = require("discord.js")
const Client = new Discord.Client();

//let settings = [];
const statusz = [];
Client.on("ready", () => {
    console.log(`A bot elindult! ennyi szerveren elérhető a bot ->` + Client.guilds.size)

    const statusz = ["Ticket Tool", "t!ticket-setup", "Support & Invite ", "t!invite"];

    var i = -1;
    //trédmárk xd
    setInterval(function() {
        i++;
        var o = i + 1;
        if (o == statusz.length + 1) {
            i = 0;
            o = 1;
        }
        const statuz = [Client.guilds.size + " szerveren | " + statusz[i]]


        const randomStatuz = statuz[0];
        Client.user.setActivity(randomStatuz, {
            type: "WATCHING",
            url: "https://twitch.tv/."
        });
    }, 5000)
});
Client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm");

    //nesze ennyi volt XD join leave? mert nkm spameli a gecibexd
    //Prefix
    var prefix = "t!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

      if (cmd === `${prefix}ticket-setup`) {
        // ticket-setup #channel
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nincs jogod ehhez!");
        let channel = message.mentions.channels.first();
        if (!channel) return message.reply("Használat: `" + prefix + "ticket-setup #channel`");

        let sent = await channel.send(new Discord.RichEmbed()
            .setTitle("`Ticket rendszer`")
            .setDescription("Reagálj hogy nyiss egy ticketet!")
            .setThumbnail("https://cdn.discordapp.com/attachments/558734913751482388/759406266224738324/042e160b-4663-42fb-c284-4531778c7cc3-adsasd.png")
            .setFooter(Client.user.tag, Client.user.displayAvatarURL)
            .setColor("#2da4bb")
        );
        if (!tickets[message.guild.id]) tickets[message.guild.id] = {};
        tickets[message.guild.id].ticket = {
            msg: sent
        };
        if (!tickets[message.guild.id].ticketList) tickets[message.guild.id].ticketList = {};
        sent.react(':ticket:');
        const reactFilter = (reaction, user) => {
            return reaction.emoji.name === ':ticket:' && sent.author.id != user.id;
        }
        const reactCollect = sent.createReactionCollector(reactFilter);
        reactCollect.on('collect', async reaction => {
            let userxd = reaction.users.last();
            reaction.remove(userxd);
            let channel = await message.guild.createChannel("ticket-" + userxd.id);
            channel.overwritePermissions(message.guild.defaultRole.id, { READ_MESSAGES: false, SEND_MESSAGES: false });
            channel.overwritePermissions(userxd.id, { READ_MESSAGES: true, SEND_MESSAGES: true })
            let embedxd = new Discord.RichEmbed()
                .setTitle("#TICKET-" + userxd.id + "")
                .setDescription("`Üdvözlünk a ticket szobában.\n Írd le a problémád, és rövid időn belül válaszolni fog egy staff!`")
                .setThumbnail("https://cdn.discordapp.com/attachments/558734913751482388/759406266224738324/042e160b-4663-42fb-c284-4531778c7cc3-adsasd.png")
                .setAuthor(userxd.tag, userxd.displayAvatarURL)
                .setFooter(Client.user.tag, Client.user.displayAvatarURL)
                .setColor("#2da4bb");
            channel.send(embedxd);
            tickets[message.guild.id].ticketList[channel.id] = {
                user: userxd
            };

        })


        message.channel.send("Ticket rendszer setup kész!")
    }

    if (cmd === `${prefix}ticket-close`) {
        if (!tickets[message.guild.id].ticketList[message.channel.id]) return message.channel.send("Ezt itt nem használhatod!")
        let embed = new Discord.RichEmbed()
            .setColor("#2da4bb")
            .setTitle("`Ticket tőrlése 3 másodpercen belül...`")
            .setThumbnail("https://cdn.discordapp.com/attachments/558734913751482388/759406266224738324/042e160b-4663-42fb-c284-4531778c7cc3-adsasd.png")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setFooter(Client.user.tag, Client.user.displayAvatarURL)
        message.channel.send(embed);
        setTimeout(function() {
            delete tickets[message.guild.id].ticketList[message.channel.id];
            message.channel.delete().catch(hiba => {
                console.log(hiba);
            });
        }, 3000)

    }


Client.login(NzYwNDYzMzIxMDg5OTY2MDgw.X3MaqA.YnYW5nIbjAke1F-iVKDxhCl0jGs);
