import { Client, MessageComponentInteraction } from "discord.js";
import dotenv from "dotenv";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

dotenv.config()
console.log("Bot is starting...");

const client = new Client({
  intents: []
})

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN)

console.log(client)