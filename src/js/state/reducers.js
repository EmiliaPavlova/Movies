import {
  SEARCH_BY_TITLE,
  SEARCH_BY_GENRE,
  SEARCH_FOR_MOVIE,
  SORT_BY_DATE,
  SORT_BY_RATING,
  GET_MOVIE_DETAILS
} from './constants';

export const initialState = {
  movies: [
    {
      "id": 8388,
      "title": "¡Three Amigos!",
      "tagline": "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
      "vote_average": 6.2,
      "vote_count": 327,
      "release_date": "1986-12-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
      "overview": "Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.",
      "budget": 25000000,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Western"
      ],
      "runtime": 102
    },
    {
      "id": 252178,
      "title": "'71",
      "tagline": "",
      "vote_average": 6.7,
      "vote_count": 501,
      "release_date": "2014-10-10",
      "poster_path": "https://image.tmdb.org/t/p/w500/b8dmfG84peFdouN2N8wOsiI9WHt.jpg",
      "overview": "A young British soldier must find his way back to safety after his unit accidentally abandons him during a riot in the streets of Belfast.",
      "budget": 0,
      "revenue": 1625847,
      "genres": [
        "Thriller",
        "Action",
        "Drama",
        "War"
      ],
      "runtime": 99
    },
    {
      "id": 19913,
      "title": "(500) Days of Summer",
      "tagline": "This is not a love story. This is a story about love.",
      "vote_average": 7.2,
      "vote_count": 3870,
      "release_date": "2009-07-17",
      "poster_path": "https://image.tmdb.org/t/p/w500/5SjtNPD1bb182vzQccvEUpXHFjN.jpg",
      "overview": "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
      "budget": 7500000,
      "revenue": 60722734,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "runtime": 95
    },
    {
      "id": 8329,
      "title": "[REC]",
      "tagline": "One witness. One camera",
      "vote_average": 7.1,
      "vote_count": 1201,
      "release_date": "2007-04-10",
      "poster_path": "https://image.tmdb.org/t/p/w500/lLSXs26iZe0aIzYrobr3FruUG36.jpg",
      "overview": "A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.",
      "budget": 1500000,
      "revenue": 30448000,
      "genres": [
        "Horror",
        "Mystery"
      ],
      "runtime": 78
    },
    {
      "id": 455656,
      "title": "#realityhigh",
      "tagline": "",
      "vote_average": 6.5,
      "vote_count": 200,
      "release_date": "2017-07-17",
      "poster_path": "https://image.tmdb.org/t/p/w500/wUXT3KEh6vjDzwYKiYWwdJNfZOW.jpg",
      "overview": "When nerdy high schooler Dani finally attracts the interest of her longtime crush, she lands in the cross hairs of his ex, a social media celebrity.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy"
      ],
      "runtime": 99
    },
    {
      "id": 333371,
      "title": "10 Cloverfield Lane",
      "tagline": "Monsters come in many forms.",
      "vote_average": 6.9,
      "vote_count": 3323,
      "release_date": "2016-03-10",
      "poster_path": "https://image.tmdb.org/t/p/w500/aeiVxTSTeGJ2ICf1iSDXkF3ivZp.jpg",
      "overview": "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.",
      "budget": 15000000,
      "revenue": 108286421,
      "genres": [
        "Thriller",
        "Science Fiction",
        "Drama"
      ],
      "runtime": 103
    },
    {
      "id": 4951,
      "title": "10 Things I Hate About You",
      "tagline": "How do I loathe thee? Let me count the ways.",
      "vote_average": 7.4,
      "vote_count": 2313,
      "release_date": "1999-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/paS5plbzKz3PYddxky6svYYz3hS.jpg",
      "overview": "Bianca, a tenth grader, has never gone on a date, but she isn't allowed to go out with boys until her older sister Kat gets a boyfriend. The problem is, Kat rubs nearly everyone the wrong way. But Bianca and the guy she has her eye on, Joey, are eager, so Joey fixes Kat up with Patrick, a new kid in town just bitter enough for Kat.",
      "budget": 16000000,
      "revenue": 53478166,
      "genres": [
        "Comedy",
        "Romance",
        "Drama"
      ],
      "runtime": 97
    },
    {
      "id": 7840,
      "title": "10,000 BC",
      "tagline": "The legend. The battle. The first hero.",
      "vote_average": 5.2,
      "vote_count": 1158,
      "release_date": "2008-02-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/hlt9xHt2gqF6qy2u0GD77Iii3yV.jpg",
      "overview": "A prehistoric epic that follows a young mammoth hunter's journey through uncharted territory to secure the future of his tribe.",
      "budget": 105000000,
      "revenue": 266000000,
      "genres": [
        "Adventure",
        "Action",
        "Drama",
        "Fantasy"
      ],
      "runtime": 109
    },
    {
      "id": 11674,
      "title": "101 Dalmatians",
      "tagline": "So many dogs. So little time.",
      "vote_average": 5.6,
      "vote_count": 972,
      "release_date": "1996-11-17",
      "poster_path": "https://image.tmdb.org/t/p/w500/pdVFUWxxDB5qt1RhcMp9A88IcGU.jpg",
      "overview": "The Live action adaptation of a Disney Classic. When a litter of dalmatian puppies are abducted by the minions of Cruella De Vil, the parents must find them before she uses them for a diabolical fashion statement.",
      "budget": 54000000,
      "revenue": 320689294,
      "genres": [
        "Comedy",
        "Family"
      ],
      "runtime": 103
    },
    {
      "id": 13654,
      "title": "101 Dalmatians II: Patch's London Adventure",
      "tagline": "A New Hero Unleashed.",
      "vote_average": 5.7,
      "vote_count": 328,
      "release_date": "2003-01-21",
      "poster_path": "https://image.tmdb.org/t/p/w500/ht4h6I7WwaZa1E8xzb1jE94mDvS.jpg",
      "overview": "Being one of 101 takes its toll on Patch, who doesn't feel unique. When he's accidentally left behind on moving day, he meets his idol, Thunderbolt, who enlists him on a publicity campaign.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Animation",
        "Family"
      ],
      "runtime": 70
    }
  ],
  searchBy: 'title',
  sortBy: 'release_date',
  movie: {
    title: 'Test title',
    genre: 'Test genre',
    release_date: '11-11-2011',
    reating: 5,
    url: '',
    duration: '100',
    description: ''
  }
};

export const moviesApp = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_TITLE:
      return { ...state };
    case SEARCH_BY_GENRE:
      return { ...state };
    case SEARCH_FOR_MOVIE:
      return { ...state };
    case SORT_BY_DATE:
      return { ...state };
    case SORT_BY_RATING:
      return { ...state };
    case GET_MOVIE_DETAILS:
      return { ...state };
    default:
      return state;
  }
}

export default moviesApp;
