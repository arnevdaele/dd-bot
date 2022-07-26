const messages: { [key: string]: string } = {
    RESPONSE_LOADING_0: 'Crunching data...',
    RESPONSE_LOADING_1: 'Looking for data...',
    RESPONSE_LOADING_2: 'Loading data...',
    RESPONSE_LOADING_3: 'Retrieving data...',

    CMD_OPTIONS_SERVER_TITLE: 'server',
    CMD_OPTIONS_SERVER_DESCRIPTION: 'Select the server to execute this command for',

    LEADERBOARD_COMMAND_DESCRIPTION: 'Show the server leaderbord for the provided filter.',
    LEADERBOARD_STAT_DESCRIPTION: 'With what statistic the leaderboard should be calculated.',
    LEADERBOARD_STAT_NOT_ALLOWED: 'The requested statistic is disabled. Choose one of the allowed ones: {{allowedStats}}',
    LEADERBOARD_TITLE: 'Top {{amount}} {{metric}} on {{server}}',
    LEADERBOARD_RANK: 'Rank',
    LEADERBOARD_NAME: 'Name',
    LEADERBOARD_KILLS: 'Kills',
    LEADERBOARD_DEATHS: 'Deaths',
    LEADERBOARD_SUICIDES: 'Suicides',
    LEADERBOARD_PLAYTIME: 'Playtime',
    LEADERBOARD_LONGEST_KILL: 'Longest kill',
    LEADERBOARD_LONGEST_SHOT: 'Longest shot',
    LEADERBOARD_KD_RATIO: 'Kill/Death ratio',
    LEADERBOARD_EMPTY_TITLE: 'No entries in leaderboard',
    LEADERBOARD_EMPTY_BODY: 'There was no data for the given statistic on that server.',

    PLAYERSTATS_COMMAND_DESCRIPTION: 'Show the player statistics for given Steam ID.',
    PLAYERSTATS_STEAM_ID_DESCRIPTION: 'The Steam ID for the player stats you want to check.',
    PLAYERSTATS_NAME: 'Statistics for {{playerName}}',
    PLAYERSTATS_PLAYTIME: 'Total playtime',
    PLAYERSTATS_KILLS: 'Kills',
    PLAYERSTATS_DEATHS: 'Deaths',
    PLAYERSTATS_LONGEST_KILL: 'Longest kill',
    PLAYERSTATS_WEAPON_MOST_KILLS: 'Favorite weapon',

    STEAM_ID_UNKNOWN: 'The Steam ID you provided is unknown',
    ERROR_UNKNOWN: 'An unknown error occured, contact server admins to resolve this issue.',
};

interface TranslateOptions {
    params?: { [key: string]: string }
}

export function translate(key: string, options?: TranslateOptions): string {
    let message = messages[key];
    if (message === undefined) {
        return key;
    }
    if (options?.params !== undefined) {
        for (const param in options.params) {
            message = message.replace(`{{${param}}}`, options.params[param]);
        }
    }
    return message;
}
