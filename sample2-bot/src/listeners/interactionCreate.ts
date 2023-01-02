import { ButtonInteraction, Client, Collector, CommandInteraction, Interaction } from "discord.js";
import { Commands } from "../commands/command";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isButton()) {
      await handleButton(client, interaction)
    }

    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction)
    }
  })
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  console.log(interaction.commandName)
  console.log(Commands)
  const slashCommand = Commands.find(c => c.name === interaction.commandName);
  if (!slashCommand) return;

  await interaction.deferReply();

  try {
    slashCommand.run(client, interaction);
  } catch (e) {
    console.log(e)
    await interaction.followUp({content: "An error has occurred"});
  }
}

const handleButton = async (client: Client, interaction: ButtonInteraction): Promise<void> => {
  console.log(interaction.customId)
  if (interaction.customId === "washer") {
    await interaction.deferUpdate();
    await interaction.editReply({content: 'A button was clicked!', components: []});
  }
}