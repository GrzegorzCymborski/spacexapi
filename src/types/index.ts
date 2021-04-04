import { Rocket, Launch, Dragon, Landpad } from './generated';

// custom types

export type Nil<T> = T | null | undefined;

export type RequiredItemsProps = {
  readonly rockets: readonly Rocket[];
  readonly launches: readonly Launch[];
  readonly landpads?: readonly Landpad[];
  readonly dragons?: readonly Dragon[];
};

export type OptionalDragonProps = {
  readonly dragons: readonly Dragon[];
};
export type OptionalLandpadsProps = {
  readonly landpads: readonly Landpad[];
};
