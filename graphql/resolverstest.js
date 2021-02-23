import { getMovies, getById, addMovie, deleteMovie } from "./db.js";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        delMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;