import { Rocket, Ship, Launch } from './generated';

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
