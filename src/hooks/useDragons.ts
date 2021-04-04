import { useLazyQuery } from '@apollo/client';
import { GET_DRAGONS } from '../API/queries';
import { OptionalDragonProps } from '../types';

const useDragons = () => {
  const [getDragons, { data }] = useLazyQuery<OptionalDragonProps>(GET_DRAGONS);
  return { getDragons, dragons: data?.dragons } as const;
};

export default useDragons;
