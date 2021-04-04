import { Rocket, Launch, Dragon, Landpad } from './generated';

// custom types

export type Nil<T> = T | null | undefined;

export type RequiredItemsProps = {
  rockets: Rocket[];
  launches: Launch[];
  landpads?: Landpad[];
  dragons?: Dragon[];
};

export type OptionalDragonProps = {
  dragons: Dragon[];
};
export type OptionalLandpadsProps = {
  landpads: Landpad[];
};
