import { TAnime, TResponse } from '../types';
import useFetch from './useFetch';

const useFetchAnimeList = (status: string, page: number, query?: string) => {
  const q = query ? `&q=${query}` : '';

  return useFetch<TResponse<TAnime>>(
    `https://api.jikan.moe/v4/anime?page=${page}&status=${status}${q}`,
  );
};

export default useFetchAnimeList;
