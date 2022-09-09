import { TAnime } from '../types';
import useFetch from './useFetch';

type TResponse = {
  data: TAnime;
};

const useFetchAnimeByID = (id: number) => {
  return useFetch<TResponse>(`https://api.jikan.moe/v4/anime/${id}`);
};

export default useFetchAnimeByID;
