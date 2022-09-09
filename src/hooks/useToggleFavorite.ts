import { toggleFavorite } from '../stores';
import { TAnime } from '../types';
import useDispatch from './useDispatch';

const useToggleFavorite = (data: TAnime) => {
  const dispatch = useDispatch();

  return () => dispatch(toggleFavorite(data));
};

export default useToggleFavorite;
