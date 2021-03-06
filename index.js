const Discord = require('discord.js')
const fs = require('fs')
const private = require('./private.js')

const client = new Discord.Client();

const prefix = ';';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('First bot is Online!')
})

// Command handler
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'aws-only') {
        client.commands.get('aws-only').execute(message, args);
    } else {
        message.channel.send('I don\' know that command')
    }
})



// Always goes at the end
client.login(private.token);