/*még a notepad++ is jobb mint a sima notepad c: c:200iq*/const ytdl = require('ytdl-core');
let devmodeReason = "XP system elkészítése";
const Discord = require(`discord.js`);
const bot = new Discord.Client();
const fs = require('fs');
const opusscript = require('opusscript');
const servers = [];
const config = require('./config.json');
const antispam = require('antispam-guard');
const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 2,
    options: "kick"
});

let altChannel = "824569788645769226";

bot.on('guildMemberAdd', async member => {
    let play = account.run(member);
    let info = alt.profile(member);
    if(play) {
        var altEmbed = new Discord.MessageEmbed()
        .setAuthor(info.userTag,info.avatar)
        .setTitle("Alt account")
        .setColor("RANDOM")
        .setDescription(`Felhasználónév: **${info.username}** \nFelhasználó ID: **${info.userID}** \nFelhasználó létrehozási dátuma: **${info.userAge}**`)
        .setFooter("Greez bot | Alt account logger")
        .setTimestamp();
        return member.guild.channels.cache.get(altChannel).send(altEmbed);
    }
})
bot.config = config;
const { GiveawaysManager } = require('discord-giveaways');
// mi a baja vele mert már egy jóideje nézem és semmi hibát nem látok benne :c én sem tudom :c
bot.GiveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],//nem ez? mind a kettőnknek van ilyen joga 
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
//minyáu köszönömc:
const mysql = require('mysql2');
const mysqlPool = mysql.createPool({
host: 'mysql.srkhost.eu',
user: 'u4662_S12P34H8bc',
password: '8k9ZiJDa0aNm',
database: 's4662_crossfire',
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});
const onevoneStats = {};
let queue = new Map();
//
const Jimp = require('jimp');//nyem is online :c ki? :c sasi de attól még el tudja lopni c: majd én meg feltöröm a szobályát JAH VÁRJ. MÁR FELTÖRTEM MIVEL RAJZOLSZ? XDxdJAAAAAAAAAAAAAAAAAAAAAAAAAAAA ZOOMIT    
//mi lenne ha csinálnék command handlert? c: öööööööööö azzal könnyebb? :3 találtam rá Ha úgy gondolod :3 c: KUSSOLJ WINDOWS, MINDENKI LESZARJA xdddez akkor a legjobb amikor pvpzek megjelenik a szövehg és letárcázódik az mc OOF XD kódot lyami
//lopok kódot innét
const cooldowns = new Discord.Collection();//ha nem baj akkor lopok cooldown kódot xd xd
const ownerIds = ["512337264303538187", "481840148623917076"];
const commandList = [];
const statusz = ["Greez:tm: v1.0","Dev: P4TR1K","Head Dev: Khaleed_"];
bot.on("ready", () => {
    console.log("A bot elindult!")
    
    var i = -1;
    //trédmárk xd
    setInterval(function() {
        i++;
        var o = i + 1;
        if (o == statusz.length + 1) {
            i = 0;
            o = 1;
        }
        const statuz = [statusz[i]]


        const randomStatuz = statuz[0];
        bot.user.setActivity(randomStatuz, {
            type: "WATCHING",
            url: "https://twitch.tv/."
        });
    }, 5000)

});
bot.on('message', msg => {
    bot.emit('checkMessage', msg);
})
function fancyTimeFormat(duration) {
    // e
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // e
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

let version = 0;
let points = 0;
bot.commands=new Discord.Collection();
let cooldown = {};
fs.readdir(__dirname + "/commands",(err,files) => {
    if(err) console.log(err);
    let jsfiles = files.filter(f=>f.split(".").pop() === "js");
    if(jsfiles.length <= 0){
        console.log("Nincs mit betölteni a commands mappából");
        return;
    }
    console.log(` | ${jsfiles.length} parancsfájl betöltése... |`);
    jsfiles.forEach((f,i) => {
        let props = require('./commands/'+f);
        if(!props.help.name) return console.log(` | ${i+1}. ${f.substring(0,f.length-3)}.js -   X`)
        bot.commands.set(props.help.name,props);
        commandList.push(props.help.name);
        console.log(` | ${i+1}. ${f.substring(0,f.length-3)}.js -  ✅ `)
    })
})
function cdFunction(message,timeinseconds){
    setTimeout(function(){
        cooldown[message.author.id] = {};
    },timeinseconds*1000)
}

bot.on('message', async message => {
    antiLink(bot, message, {
        staffRole: "739536919368695959",
        warnMSG: `A szerveren nincs engedélyezve a discord meghívók csatolása! (<@${message.author.id}>)`
    });
});
bot.on("message", async message => { // az index.js-t nem kell a commandsba rakni? akkor hogy indítod el? xd
    if (message.author.bot) return;
    let devmode = require(__dirname + "/devmode.json").enabled;
    if (message.channel.type === "dm") return;
    var prefix = ">";
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    const owokamowoka = cmd.toLowerCase();
    let commandf;// nézzük a jó oldalát. Már nem érzékeli a parancsokat xd oof XD
    if(bot.commands.has(owokamowoka.slice(prefix.length, owokamowoka.length))) commandf=bot.commands.get(owokamowoka.slice(prefix.length, owokamowoka.length));
    // az nem lehet hogy a commandsba nincs benne az index.js? xd öö ezt nem értem
        // mi kéne még a botba? c: ööööö a welcomos cuccot félbeszakítottuk egy kis mucsi zolival (teljes mértékben megérte) XDDDDDDDDDDD
    let devEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("<a:8740_developer_transparent:753651945905979494> | DEV MODE")
            .setDescription("A bot parancsai le vannak tiltva a felhasználók számára! Indok: "+devmodeReason);
      
mysqlPool.getConnection(function(err,uwu){
 
    if(err){
        console.log(":'(");
        return;
    }
    console.log("uwu connected");
    //let sqlxd = `if exists(SELECT * from xp where memberID='${message.author.id}') \n BEGIN \n update xp set currentXP = '70' WHERE memberID='${message.author.id}' \n End\nelse\nbegin\ninsert into xp (guildID,memberID,currentXP,neededXP) VALUES ('${message.guild.id}', '${message.author.id}', '69', '420')\nend`;
    let sqlxd = `SELECT * from xp where memberID='${message.author.id}'`;
    let sql = 'INSERT INTO xp (guildID,memberID,currentXP,neededXP) VALUES (\'' + message.guild.id + '\', \'' + message.author.id + '\', \'69\', \'420\')';
    let sql2 = 'UPDATE xp SET currentXP = \'70\' WHERE memberID=\''+message.author.id+"\"";
    let currentxd = [];
    let currXp = 1;
    let currLevel = 1;
    uwu.query(sqlxd, function(err,res){
        //pill c: c:
        currentxd=res;
        if(res.length < 1){
            sqlxd = `insert into xp (guildID,memberID,currentXP,neededXP,level) VALUES ('${message.guild.id}', '${message.author.id}', '1', '5','1')`;
            uwu.query(sqlxd,function(err,res){
                uwu.release();
                if(err) throw err;
                //message.channel.send("elvileg sikerült a második lekérdezés is c:\n```sql\n"+sqlxd+"\n```")
            })
        } else {
            
            currXp = currentxd[0].currentXP+1;
            neededXp = currentxd[0].neededXP;
            currLevel = currentxd[0].level;
            if(neededXp == currXp || neededXp < currXp) {
                sqlxd = `update xp set currentXP = '0', level='${currLevel+1}', neededXP = '${(currLevel+1)*5}' WHERE memberID='${message.author.id}' and guildID='${message.guild.id}'`;
                uwu.query(sqlxd,function(err,res){
                uwu.release();
                if(err) throw err;
                    //message.channel.send("elvileg sikerült a második lekérdezés is c:\n```sql\n"+sqlxd+"\n```")
                })
            } else {
            sqlxd = `update xp set currentXP = '${currXp}' WHERE memberID='${message.author.id}' and guildID='${message.guild.id}'`;
            uwu.query(sqlxd,function(err,res){
                uwu.release();
                if(err) throw err;
                //message.channel.send("elvileg sikerült a második lekérdezés is c:\n```sql\n"+sqlxd+"\n```")
            })
            }
        }
        uwu.release();
        
        console.log("yey");
        //console.log({res})
        let igazilevel = currLevel+1;
        var lvlup = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail("https://vignette2.wikia.nocookie.net/darkorbit/images/b/ba/Level_Up_Logo.gif/revision/latest?cb=20120831112725")
        .setTitle("<:LevelUp:764543778199437404> SZINT LÉPÉS")
        .setDescription(`**Gratulálok **__${message.author.tag}__ szintet léptél! \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n **${currLevel} szint** ==> **${igazilevel} szint**`);
        if(currentxd.length != 0 && currentxd[0].neededXP == currXp) message.channel.send(lvlup);
        //message.channel.send("elvileg sikerült c:\n```sql\n"+sqlxd+"\n```\n\nsidenote:"+currXp+"xp-d van ezzel c:\nja meg level "+currLevel)
       
    });
    

    

})
    if(cmd === "<@!738730932990771261>") {
        var hyEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Greez™#1117")
        .setThumbnail(bot.user.avatarURL)
        .setDescription("Helló! A prefixem `>` \n Segítségre van szükséged? Használd a `>help (probléma)` parancsot, vagy a fejlesztőket privátban! \n Bot fejlesztők `P4TR1K` - `P4TR1K#5089` & `chlkrisz` - `chlkrisz#0110` \n Parancsok `>parancsok`");
        message.channel.send(hyEmbed);//én felakasztom magamXD
    }// itt lenni? :c
    if(cmd === "<@738730932990771261>") {
        var hyEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Greez™#1117")
        .setThumbnail(bot.user.avatarURL)
        .setDescription("Helló! A prefixem `>` \n Segítségre van szükséged? Használd a `>help (probléma)` parancsot, vagy a fejlesztőket privátban! \n Bot fejlesztő `P4TR1K` - `P4TR1K#5089` \n Parancsok `>parancsok`");
        message.channel.send(hyEmbed);
    }
    if(!message.content.startsWith(prefix)) return;
    if(devmode == 1){
        console.log({devmode});
        let memeid = message.author.id;
        if (ownerIds.some(id => memeid.includes(id))) {// owner
            
    
        } else {
            return message.channel.send(devEmbed);
        }
    } else {
        console.log({devmode});
    }
    if(commandf) {
        let asdsaxd = {
            command: commandf.name,
            time: Date.now()
        };//mit keresni? c: pontosan ezt c:c:_
        if(commandf.help.cooldown){
            console.log("van cooldown")
            if(!cooldown[message.author.id] || !cooldown[message.author.id].command){
                cooldown[message.author.id] = asdsaxd;
                cdFunction(message,commandf.help.cooldown) // uwu
                commandf.run(bot,message,args,onevoneStats,devmode);
            } else {
                let time = Date.now() - cooldown[message.author.id].time;
                message.channel.send(`Nem használhatod még ezt a parancsot ${Math.floor(time / 1000)} másodpercig!`);
            }
            
        } else {
            commandf.run(bot,message,args,onevoneStats,devmode);
        }
        
        
    }
    
  
    
    //----------------------------------------------------------------------------//
    //kövi command mi legyen? c: öööö a tegnapi devmode-ot folytatjuk? :3 iken, de nehéz lesz egy picit :c

    /*
    if(cmd === `${prefix}unmute`) {
        let unmMember = message.mentions.users.first()
        var unmEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Parancs: >unmute")
        .setDescription("Helyes használat - >unmute (felhasználó) \n Példa - >unmute @P4TR1K \n Jogosultság: `SZEREPEK KEZELÉSE` \n \n **LEÍRÁS** | Ezzel a paranccsal némított felhasználókat tudsz feloldani a némítás alól!");
        if(!unmMember) return message.channel.send(unmEmbed);
        //      
        message.channel.overwritePermissions(unmMember.id, {
            SEND_MESSAGES: true
        });
        unmMember.send(`Némításod fel lett oldva a(z) **${message.guild.name} szerveren!**`);
        let unmuteEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`:white_check_mark: ${unmMember} némítása fel lett oldva ${message.author} által!`);

        message.channel.send(unmuteEmbed);
    }
    */
	if(cmd === `${prefix}rank`){
        let user = message.mentions.users.first() || message.author;
        //xp2003 offos
        //const canvas = new Canvacord();
		mysqlPool.getConnection(function(err,uwu){
 
            if(err){
                console.log(":'(");
                return;
            }
            console.log("uwu connected");
            //let sqlxd = `if exists(SELECT * from xp where memberID='${message.author.id}') \n BEGIN \n update xp set currentXP = '70' WHERE memberID='${message.author.id}' \n End\nelse\nbegin\ninsert into xp (guildID,memberID,currentXP,neededXP) VALUES ('${message.guild.id}', '${message.author.id}', '69', '420')\nend`;
            let sqlxd = `SELECT * from xp where memberID='${message.author.id}'`;
            
            //let sql = 'INSERT INTO xp (guildID,memberID,currentXP,neededXP) VALUES (\'' + message.guild.id + '\', \'' + message.author.id + '\', \'69\', \'420\')';
            //let sql2 = 'UPDATE xp SET currentXP = \'70\' WHERE memberID=\''+message.author.id+"\"";
            //miért mozgatni el egér?véletlen volt c:c:véletlen levadásztad? c: xd
            let currentxd = [];
            let currXp = 1;
            let currLevel = 1;
            uwu.query(sqlxd, async function(err,res){
                //pill c: c:
                //currentxd=res;
                // összes xp számolás owo kezdet \\
                let totalXP = currXp;
                
                let uwuka = currLevel-1;
                if(uwuka != 0){
                    while(uwuka > 1){
                        let hozzaAdando = uwuka*5;
                        totalXP = totalXP + hozzaAdando;
                        uwuka--;
                        if(uwuka == 1) totalXP = totalXP + 5;
                    }
                } else {
                    totalXP = currXp;
                }
                console.log(res[0].currentXP);
                const rank = new Canvacord.Rank()
                .setAvatar(message.author.avatarURL({ format: "png" }))
                .setCurrentXP(res[0].currentXP)
                .setRequiredXP(res[0].level * 5)
                .setStatus(message.member.presence.status)
                .setLevel(res[0].level)
                .setProgressBar("#FAC800", "COLOR")
                .setUsername(message.author.username)
                .setDiscriminator(message.author.discriminator);
 
                rank.build()
                    .then(data => {
                         const attachment = new Discord.MessageAttachment(data, "rank.png");
                         message.channel.send(attachment);
                     });
                        
                     /*
                    let image = await canvas.Rank({
                        username: message.author.username,
                        discrim: message.author.discriminator,
                        status: message.member.presence.status,
                        currentXP: currXp,
                        neededXP: currXp*currLevel,
                        totalXP,
                        currLevel,
                        avatarURL: message.author.displayAvatarURL({ format: "png"}),
                        color: "white"
                    })
                    message.channel.send(new Discord.MessageAttachment(image, "rank.png"))
                    */
        
        })
    })
}
    if(cmd === `${prefix}changelog`) {
        version = version + 1;
        message.delete().catch();
        let msg = args.join(" ");
        if(!msg) msg = "Nem jött ki fejlesztés!";
        var botEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle(`Changelog #${version}`)
        .setThumbnail(bot.user.avatarURL)
        .setDescription(`| FRISSÍTÉS JÖTT KI A BOTBAN | \n :small_orange_diamond: **${msg}**`)
        .setFooter(`A frissítést közzétette: ${message.author.username}`)
        .setTimestamp();
        
        message.channel.send("@everyone ", botEmbed);
    }
    if(cmd === `${prefix}allcommands`) {
        var commandsEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Jelenleg ennyi parancs van a botban: **${jsfiles.length}**`);

        message.channel.send(commandsEmbed);
    }
    
    if(cmd === `${prefix}stat`) {
        message.delete().catch();
        let enemystat = message.mentions.members.first();
        var helpEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Parancs: >stat")
        .setDescription("Helyes használat - >stat (felhasználó) \n Példa - >stat @P4TR1K \n \n **LEÍRÁS** | Ezzel a paranccsal az `>1v1` paranccsal szerzett pontokat, győzelmeket tudod megtekinteni!");
        if(!enemystat) return message.channel.send(helpEmbed);

        var statEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`${enemystat.displayName} statisztikái`)
        .setDescription(`Győzelmek -> **${onevoneStats[message.guild.id].players[enemystat.user.id].win}** \n Pontok -> **${onevoneStats[message.guild.id].players[enemystat.user.id].points}**`);

        message.channel.send(statEmbed);
    }
    if(cmd === `${prefix}play`) {
        message.delete().catch();
        /*
        message.delete().catch();
        if (!message.member.voiceChannel) return message.channel.send('Csatlakozz egy csatornához!');
        if (message.guild.me.voiceChannel) return message.channel.send('Bocsi, de a bot éppen másnak játszik zenét!');
        if (!args[0]) return message.channel.send('Légy szíves adj meg egy YouTube linket!');
        
        let validate = await ytdl.validateURL(args[0]);
        if(!validate) return message.channel.send('Légy szíves adj meg egy **normális** YouTube linket!');
  
  
        let info = await ytdl.getInfo(args[0]);
  
        let connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playArbitraryInput(ytdl(args[0], { filter: 'audioonly' }));
        const help = new Discord.MessageEmbed()
            .setAuthor('Zene', bot.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(`:small_orange_diamond: Zene címe: **${info.videoDetails.title}** \n :small_blue_diamond: Csatorna neve: **${info.videoDetails.author.name}** \n :small_orange_diamond: Zene hossza: **${fancyTimeFormat(info.length_seconds)}** \n \n  :small_blue_diamond: Zene URL: ${args[0]}`)
            message.channel.send(help)
        dispatcher.on('end', () => {
        setTimeout(function() {message.guild.voiceConnection.disconnect()}, 1)
            message.channel.send("A zene véget ért, ezért lecsatlakoztam a hangcsatornáról!");
        });
        */
		let serverqueue = [];
		let connect = null;
		let dispatch = null;
		if(queue.get(message.guild.id)) {
			serverqueue=queue.get(message.guild.id).queue;
			connect=queue.get(message.guild.id).connection;
			dispatch=queue.get(message.guild.id).dispatcher;
		}
		let alap = {
			txtchannel: message.channel,
			playing: true,
			connection: connect,
			
			dispatcher: dispatch,
			voice: message.member.voiceChannel,
			queue: serverqueue
		};
		let serverQ=queue.get(message.guild.id);
		play(message,serverQ,args,alap);
    }
	if(cmd === `${prefix}skip`) {
        skip(message);
    }
	if(cmd===`${prefix}stop`){
		stop(message);
	}
});

// a kutyák már olyan idegesek hogy eszik a betontXDDDDDDDDD ez még mindig igazxdddXDDDDDDDDDDDD
//  /\
//  ||
//  ||
//imádom ezt a kommentet c: ez még mindig igaz c: EZ A FŐNÖKE pfúú de fejbebasznám az öregasszonyverő kalapáccsal? IKENXDXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDxddddddddddddddddddddddddddDDDDDDDDDDDDDDDDDDDDD XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD HALDOKLOK XDDDDDDDDDDDDDDDDDDDDDDDDDxdddddddddddddddXDDDDDDDDDDDÉn vagyok az advanced system care: 2 terméket kell frissíteni : anyádat és apádat (kissé elavultakXDDD)
async function skip(message){
	let serverqueue = [];
	let connect = null;
	let dispatch = null;

		if(queue.get(message.guild.id)) {
			serverqueue=queue.get(message.guild.id).queue;
			connect=queue.get(message.guild.id).connection;
			dispatch=queue.get(message.guild.id).dispatcher;
		}
	
	if(dispatch != null ){ dispatch.end(); }
	else {
		if(!serverqueue[0]) {
            var embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(":fast_forward: SKIP")
            .setDescription("Nincs olyan zene, amit át tudnék ugrani! [" + message.author.username + "]");

			return message.channel.send(embed)
		} else {
			return message.channel.send("HIBA! Nincs dispatcher!")
			//jézusom ha valaki "kileakeli" a kódot akkor az meghal xDDxdd (a kommentektől) XD
		}
	}
		
}

async function stop(message){
	let serverqueue = [];
	let connect = null;
	let dispatch = null;

		if(queue.get(message.guild.id)) {
			serverqueue=queue.get(message.guild.id).queue;
			connect=queue.get(message.guild.id).connection;
			dispatch=queue.get(message.guild.id).dispatcher;
		}
	
	if(dispatch != null ){ 
		serverqueue = [];
		queue.set(message.guild.id,serverqueue)
		dispatch.end();
	}
	else {
		if(!serverqueue[0]) {
            var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(":pause_button: LEÁLLÍTÁS")
            .setDescription("Nincs olyan zene, amit meg tudnék állítani! [" + message.author.username + "]");
			return message.channel.send(embed)
		} else {
			return message.channel.send("HIBA! Nincs dispatcher!")
			//jézusom ha valaki "kileakeli" a kódot akkor az meghal xDDxdd (a kommentektől) XD
		}
	}
		
}

async function play(message, serverQ,args,alap){
	let playnow = false;
	
	if(!serverQ){
		
		queue.set(message.guild.id,alap);
		serverQ = queue.get(message.guild.id);
		
	}
	if(!serverQ.queue[0]) playnow = true;
	let validate = ytdl.validateURL(args[0]);
	if(!validate) {
		
        queue.delete(message.guild.id);
        var embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(":x: Hibás linket adtál meg! [" + message.author.username + "]");
		return message.channel.send(embed);
	}
	let info = await ytdl.getInfo(args[0]);
	
	const song = {
		title: info.title,
		url: args[0]
		
	};
	console.log(song);
//piwwanatElintézted az öregasszonyokat? Aha. A palacsinta finom voltXD öregasszony ízesítésű volt ilyesmikről beszélek xDDDDDDD XDD
	if(playnow){
		
		alap.queue.push(song);
		queue.set(message.guild.id,alap);
		let serverQ = alap.queue;//a kommentek azok örökre maradnak c: pontosan c:
		//console.log({playnow,song,serverQ})
		try{
			//baszki...
			//megvan miért...
			//nem skipel a kövire? nem, annál fájdalmasabbxd
			let connection = await message.member.voice.channel.join();
			alap.connection = connection;
			playMusic(message,alap.queue[0],alap)
		// 2cq TÖLTSÉ MÁ BE xdd 99.9999999% oof xDD
		} catch(err) {
			//piwwanat és jövök c: (fun fact: azóta visszajöttem)
			
			queue.delete(message.guild.id);
		}
		//nézd a varázstrükkömet VARÁÁÁZSLAAAT C: xddd
	} else {
		alap.queue.push(song);
		queue.set(message.guild.id,alap);
		let serverQ = alap.queue;
		//console.log({playnow,song,serverQ})
        //pislogás
        var embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle(":scroll: LEJÁTSZÁSI LISTA")
        .setDescription(`:white_check_mark: **${song.title}** hozzá adva a lejátszási listához! [${message.author}]`);
		message.channel.send(embed)
	}
	
	
	
}

function playMusic(message,song,alap){
	
	//patrik
	//nem jöttem já a hibára... xd ui.: na meg a faszomat nem
	let meow = queue.get(message.guild.id);
    var embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`:microphone: Most játszódik - **${meow.queue[0].title}** [${message.author}]`);
	meow.txtchannel.send(embed);
	//console.log({song, meow});
	const dispatcher = meow.connection.play(ytdl(song.url)).on('finish', ()=>{
		
		
		//console.log(meow.queue)
		meow.queue.shift(1);
		//console.log(meow.queue)
		
		//if(meow.queue[0]) play(message,meow.queue[0],args,meow);
		if(meow.queue[0]) playMusic(message,meow.queue[0],alap)
		if(!meow.queue[0]) {
            var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(":red_circle: Vége a lejátszási listának!");
			meow.txtchannel.send(embed);
			queue.delete(message.guild.id);
			
		}
	})
	.on('error', err=>{
		console.error(err);
	});
	meow.dispatcher = dispatcher;//itt vagy amúgy? c: iken :3 jó c: én közben eszek C: :3 zöldséges tésztát c: (fú de fogom irigyelni a mostani énemet a jövőben) xd
	queue.set(message.guild.id, meow);
}


bot.login(require(__dirname + '/config.json').token);
