const chalk = require("chalk");

module.exports = (client) => {
    console.log(chalk.magentaBright(`[ INFO ] `) + `${client.default.botname} is now online serving ${client.guilds.cache.size} guilds`)
    client.user.setActivity(`nooder.gg | ${client.default.prefix}help`, { type: "PLAYING" });
}