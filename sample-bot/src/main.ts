import { Client, Interaction, Message, IntentsBitField } from "discord.js";
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
  ],
});

client.once('ready', () => {
  console.log('Bot start up and Ready!')
  console.log(client.user?.tag)
})

client.on('messageCreate', async (message: Message) => {
  await message.fetch(true)
  if (message.author.bot) return;
  if (message.content === 'Hello') {
    message.channel.send('World');
  }
})

client.login(process.env.TOKEN)