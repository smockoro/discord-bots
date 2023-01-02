import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./command";

export const Ping: Command = {
  name: "ping",
  description: "Replay a greeting",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    await interaction.followUp({
      ephemeral: true,
      content: "Pong!!"
    })
  },
}