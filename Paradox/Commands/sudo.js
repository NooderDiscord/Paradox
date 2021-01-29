const Discord = require("discord.js")
const chalk = require("chalk");

module.exports.run = async(client, message, args) => {
    message.delete()

    try {
        let normalContent = args.join(" ")
        message.channel.send(normalContent, { disableEveryone: true })

    } catch (err) {
        console.log(chalk.redBright(`[ WATCHDOG ] `) + `${err}`)
        let errorFound = new Discord.MessageEmbed()
            .setDescription(`:x: ***An error has occured***`)
            .setColor(client.colors.RED)
        message.channel.send(errorFound)
    }
}