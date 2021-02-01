const Discord = require("discord.js");
const chalk = require("chalk");

module.exports.run = async(client, message, args) => {

    try {

        let banTarget = args.join(" ");

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`:x: ***Please provide a user id to hackban***`)
                .setColor(client.colors.RED))
        }

        if (message.member.hasPermission("BAN_MEMBERS")) {

            client.fetchUser(banTarget).then(id => {
                message.guild.ban(banTarget).catch(err => {
                    message.channel.send(new Discord.MessageEmbed()
                        .setDescription(`:x: ***Failed to ban ${banTarget}***`)
                        .setColor(client.colors.RED))
                })
            })
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`***✅ ${banTarget.user.tag} was yeeted by a hammer***`)
                .setColor(client.colors.GREEN))
        }

    } catch (err) {
        console.log(chalk.redBright(`[ WATCHDOG ] `) + `${err}`)
        let errorFound = new Discord.MessageEmbed()
            .setDescription(`:x: ***An error has occured***`)
            .setColor(client.colors.RED)
        message.channel.send(errorFound)
    }
}