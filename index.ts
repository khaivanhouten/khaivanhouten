import { Client, GatewayIntentBits, Intents, CommandInteraction } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.content === '!ping') {
        const sent = await message.channel.send('Ping.');
        sent.edit(`Pong! Latency is ${sent.createdTimestamp - message.createdTimestamp}ms.`);
    }
});

client.login("token kalian");
