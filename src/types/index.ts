import { Rocket, Ship, Launch, Dragon, Landpad } from './generated';

// custom types

export type Nil<T> = T | null | undefined;

export type RocketsProps = {
  rockets: Rocket[];
};

export type ShipsProps = {
  ships: Ship[];
};

export type LaunchesProps = {
  launches: Launch[];
};

export type DragonProps = {
  dragons: Dragon[];
};
export type LandpadsProps = {
  landpads: Landpad[];
};
