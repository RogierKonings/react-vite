import { ICharacter } from "./character.models";

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: ICharacter[];
    url: string;
    created: string;
}