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
  payload: {
    url,
    title,
    genre,
    release_date
  }
});
