import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export const WashButton =
  new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
      new ButtonBuilder()
        .setCustomId("washer")
        .setLabel("Click this button")
        .setStyle(ButtonStyle.Primary),
    )
