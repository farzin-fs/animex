import useSelector from './useSelector';

const useFavorites = () => {
  const data = useSelector(state => state.favorites.data);

  return data;
};

export default useFavorites;
