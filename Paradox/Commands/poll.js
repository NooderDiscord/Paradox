const Discord = require("discord.js")
const chalk = require("chalk");

module.exports.run = async(client, message, args) => {
    try {

        if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`:x: ***Provide the correct arguments***`)
            .setColor(client.colors.RED))

        let pollEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Created a poll`, message.author.displayAvatarURL())
            .setDescription(args.join(" "))
            .setColor(client.colors.GREEN)
        message.channel.send(pollEmbed).then(message => {
            message.react('✅').then(() =>
                message.react('❎'));
        });

    } catch (err) {
        console.log(chalk.redBright(`[ WATCHDOG ] `) + `${err}`)
        let errorFound = new Discord.MessageEmbed()
            .setDescription(`:x: ***An error has occured***`)
            .setColor(client.colors.RED)
        message.channel.send(errorFound)
    }
}