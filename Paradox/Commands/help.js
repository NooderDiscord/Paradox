const Discord = require("discord.js");

module.exports.run = async(client, message) => {

    try {

        let help = new Discord.MessageEmbed()
            .setAuthor(`${client.default.botname}'s Information`, message.author.displayAvatarURL())
            .setDescription(`This is my help menu :D`)
            .addField(`Help`, `shows this embed`)
            .addField(`Sudo`, `Makes the bot say something`)
            .setFooter(client.footer)
            .setColor(client.colors.GREEN)
        message.channel.send(help)

    } catch (err) {
        console.log(err)
    }
}