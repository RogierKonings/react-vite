import { IEpisode } from './episode.model';
import { ILocation } from './location.model';

export interface ICharacter {
  id: number;
  name: string;
  status: CharacterStatusEnum;
  species: string;
  type: string;
  gender: CharacterGenderEnum;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: IEpisode[];
  url: string;
  created: string;
}

export enum CharacterStatusEnum {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export enum CharacterGenderEnum {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

export interface ICharacterQueryFilters {
  name?: string;
  status?: CharacterStatusEnum;
  species?: string;
  type?: string;
  gender?: CharacterGenderEnum;
}
