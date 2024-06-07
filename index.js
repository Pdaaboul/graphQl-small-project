import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import { typeDefs } from "./schema.js";

//db
import db from "./_db.js";


const resolvers = {
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    }
}

//server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at port: ", 4000);
