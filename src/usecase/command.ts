import {CFToolsServer, CommandConfig} from '../domain/cftools';
import {SteamId64} from 'cftools-sdk';
import {Command} from '../domain/command';
import {Leaderboard} from './leaderboard';
import {PlayerStatistics} from './player-statistics';

export type CommandFactory = (server: CFToolsServer, parameters: Map<string, string>, config?: CommandConfig) => Command;
export const factories: Map<string, CommandFactory> = new Map<string, CommandFactory>([
    [PlayerStatistics.COMMAND, (server, parameters) => {
        return new PlayerStatistics(server, SteamId64.of(parameters.get('steam_id')!!));
    }],
    [Leaderboard.COMMAND, (server, parameters, config) => {
        return new Leaderboard(server, parameters, {
            ...{
                defaultStat: 'kills',
                numberOfPlayers: 7,
                allowedStats: ['kills', 'deaths', 'suicides', 'playtime', 'longest_kill', 'longest_shot', 'kdratio']
            },
            ...config,
        });
    }],
]);
