import {
  GET_MOVIES,
  // SEARCH_BY_TITLE,
  // SEARCH_BY_GENRE,
  SEARCH_FOR_MOVIE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  GET_MOVIE_DETAILS
} from '../constants';

const API_URL = 'http://react-cdp-api.herokuapp.com/';

export const getMovies = (sortBy, search) => dispatch => {
  dispatch({
    type: GET_MOVIES
  });
  return request.get(`${API_URL}/movies`)
}

// export const searchByTitle = title => ({
//   type: SEARCH_BY_TITLE,
//   payload: title
// });

// export const searchByGenre = genre => ({
//   type: SEARCH_BY_GENRE,
//   payload: genre
// });
