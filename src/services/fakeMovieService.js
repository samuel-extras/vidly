const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd71817",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd1818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd71818",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd1818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71819",
    title: "Blood Shed",
    genre: { _id: "5b21ca3eeb7f6fbccd1818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71820",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd1819", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71821",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd1819", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71822",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd1819", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71823",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd1820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71824",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd1820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd71825",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd1820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
