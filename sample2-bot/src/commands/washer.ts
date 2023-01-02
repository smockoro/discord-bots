import { Command } from "./command";
import { ApplicationCommandType, ButtonStyle, Client, CommandInteraction, EmbedBuilder } from "discord.js";
import { WashButton } from "../components/buttons/washButton";

export const Washer: Command = {
  name: "washer",
  description: "washer w.c",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    await interaction.followUp({
      content: "washer!!!",
      components: [WashButton],
      embeds: [
        new EmbedBuilder()
          .setColor(0x0099FF)
          .setURL("https://www.google.com")
          .setDescription("this is sample of link to Google Link")
          .setTitle("Google Link")
      ]
    })
  }
}