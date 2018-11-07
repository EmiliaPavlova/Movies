import {
  SEARCH_BY_TITLE,
  SEARCH_BY_GENRE,
  SEARCH_FOR_MOVIE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  GET_MOVIE_DETAILS
} from '../constants';

export const searchByTitle = title => ({
  type: SEARCH_BY_TITLE,
  payload: title
});

export const searchByGenre = genre => ({
  type: SEARCH_BY_GENRE,
  payload: genre
});
