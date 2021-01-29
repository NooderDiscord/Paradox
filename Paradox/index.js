const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client({
    fetchAllMembers: false,
    disableMentions: "none"
});
client.default = require("./Settings/default-config.json");
client.config = require("./Settings/configuration.json");
client.colors = require("./Plugins/colors.json");
client.footer = `${client.default.botname} was developed by Nooder Development!`;

fs.readdir("./Events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const Event = require(`./Events/${file}`);
        let EventName = file.split(".")[0];
        client.on(EventName, Event.bind(null, client));
    });
});

client.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

client.login(client.config.token)