import { ChatInputApplicationCommandData, CommandInteraction, Client } from "discord.js";
import { Hello } from "./hello";
import { Washer } from "./washer";
import { Ping } from "./ping";

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: CommandInteraction) => void;
}

export const Commands: Command[] = [Hello, Washer, Ping];