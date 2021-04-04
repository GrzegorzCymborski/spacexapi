import { useQuery } from '@apollo/client';
import { GET_REQUIRED_GROUPS } from '../API/queries';
import { RequiredItemsProps } from '../types';

const useRockets = () => {
  const { data } = useQuery<RequiredItemsProps>(GET_REQUIRED_GROUPS);
  return { rockets: data?.rockets, launches: data?.launches } as const;
};

export default useRockets;
