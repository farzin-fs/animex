import useSelector from './useSelector';

const useIsFavorite = (id: number) => {
  const data = useSelector(state => state.favorites.data);
  const index = data.findIndex(item => item.mal_id === id);

  return index !== -1;
};

export default useIsFavorite;
