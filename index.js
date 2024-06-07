// index.js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import sequelize from "./db.js";
import Game from "./models/Game.js";
import Author from "./models/Author.js";
import Review from "./models/Review.js";

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all games
    games: async () => await Game.findAll(),

    // Fetch all reviews
    reviews: async () => await Review.findAll(),

    // Fetch all authors
    authors: async () => await Author.findAll(),

    // Fetch a specific review by ID
    review: async (_, { id }) => await Review.findByPk(id),

    // Fetch a specific game by ID
    game: async (_, { id }) => await Game.findByPk(id),

    // Fetch a specific author by ID
    author: async (_, { id }) => await Author.findByPk(id),
  },
  Game: {
    // Fetch reviews related to a specific game
    reviews: async (parent) => await Review.findAll({ where: { game_id: parent.id } }),
  },
  Author: {
    // Fetch reviews written by a specific author
    reviews: async (parent) => await Review.findAll({ where: { author_id: parent.id } }),
  },
  Review: {
    // Fetch the author of a specific review
    author: async (parent) => await Author.findByPk(parent.author_id),

    // Fetch the game of a specific review
    game: async (parent) => await Game.findByPk(parent.game_id),
  },
  Mutation: {
    // Delete a game by ID and return the remaining games
    deleteGame: async (_, { id }) => {
      await Game.destroy({ where: { id } });
      return await Game.findAll();
    },

    // Add a new game and return the created game
    addGame: async (_, { game }) => {
      return await Game.create(game);
    },

    // Update a game by ID with new details and return the updated game
    updateGame: async (_, { id, edits }) => {
      await Game.update(edits, { where: { id } });
      return await Game.findByPk(id);
    },
  },
};

// Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port:", 4000);
