import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TDrawerNavigatorParams } from './navigation/DrawerNavigator';
import { TFavoritesStackNavigatorParams } from './navigation/FavoritesStackNavigator';
import { TListingStackNavigatorParams } from './navigation/ListingStackNavigator';
import { TTabNavigatorParams } from './navigation/TabNavigator';

export type TRootNavigatorParams = TDrawerNavigatorParams &
  TListingStackNavigatorParams &
  TFavoritesStackNavigatorParams;

export type TNativeStackScreenProps<T extends keyof TRootNavigatorParams> =
  NativeStackScreenProps<TRootNavigatorParams, T>;

export type TTabScreenProps<T extends keyof TTabNavigatorParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TTabNavigatorParams, T>,
    TNativeStackScreenProps<keyof TRootNavigatorParams>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootNavigatorParams {}
  }
}

export interface TResponse<T> {
  pagination: TPagination;
  data: T[];
  links: TLinks;
  meta: TMeta;
}

export interface TPagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: TItems;
}

export interface TItems {
  count: number;
  total: number;
  per_page: number;
}

export interface TLinks {
  first: string | null;
  last: string | null;
  prev: string | null | null;
  next: string | null;
}

export interface TMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: TPaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface TPaginationLink {
  url: null | string;
  label: string;
  active: boolean;
}

export interface TAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  approved: boolean;
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: string | null;
  year: number | null;
}
