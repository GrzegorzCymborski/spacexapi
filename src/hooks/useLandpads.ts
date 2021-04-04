import { useLazyQuery } from '@apollo/client';
import { GET_LANDPADS } from '../API/queries';
import { OptionalLandpadsProps } from '../types';

const useLandpads = () => {
  const [getLandpads, { data }] = useLazyQuery<OptionalLandpadsProps>(GET_LANDPADS);
  return { getLandpads, landpads: data?.landpads } as const;
};

export default useLandpads;
