import {CFToolsClient} from 'cftools-sdk';
import {MessageEmbed} from 'discord.js';

export type ParameterDescription = {
    [name: string]: {
        description: string,
        choices?: string[],
        required?: boolean,
    }
};

export interface Command {
    execute(client: CFToolsClient, response: MessageEmbed): Promise<string | MessageEmbed>;

    availableParameters(): ParameterDescription;
}

export function defaultResponse(): MessageEmbed {
    return new MessageEmbed()
        .setFooter({text: 'DarkestDayZ Leaderboard | Powered by CFTools'})
        .setTimestamp(new Date())
        .setColor('BLUE');
}
