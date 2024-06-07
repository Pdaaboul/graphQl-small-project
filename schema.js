export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
        game_id : Int!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        games:[Game]
        reviews:[Review]
        review(id: ID!): Review
        game(id:ID!):Game
        author(id:ID!):Author
        authors:[Author]
    }
    type Mutation {
        addGame(game: AddGameInput) :Game
        deleteGame(id : ID!) : [Game]
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }

`;
