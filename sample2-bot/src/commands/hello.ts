import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "./command";

// 独自のCommand型を実装してる
export const Hello: Command = {
  name: "hello",
  description: "Replay a greeting",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const content = "Hello there!";

    await interaction.followUp({
      ephemeral: true,
      content
    })
  }
}
