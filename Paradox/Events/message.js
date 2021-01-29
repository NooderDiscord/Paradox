const chalk = require('chalk');

module.exports = async(client, message) => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return console.log(`[${message.author.username}] ${message.content}`);

    if (!message.content.startsWith(client.default.prefix) || message.author.bot) return;

    const args = message.content.slice(client.default.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);

    console.log(chalk.magentaBright(`[ INFO ] `) + chalk.white(`${message.author.tag} used the command `) + chalk.green(`${command}`) + ` in ${message.guild.name}`)
};