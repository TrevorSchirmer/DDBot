const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const log = require("./logger.js");

client.config = config; //Pass config to client

client.login(config.token);

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        // super-secret recipe to call events with all their proper arguments *after* the `client` var.
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});


//Message handler
client.on("message", (message) => {

    if (message.author.bot) return;
    if (message.author.id !== client.user.id) return
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
        log.cmd(message, client)
        message.delete(1000);
    } catch (err) {
        log.err("-" + command, "Invalid Command");
    }
});

// Event handling
client.on('warn', (message) => { if (message.includes('Authentication')) { log.warn(message) } })
client.on('error', (err) => log.err(err, 'Bot'))
client.on('disconnect', () => log.log('Disconnected from Discord', 'Disconnect'))

//Report if bot is ready
client.on("ready", () => {
    log.ready("Ready!");
});