const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

let books = [{
  isbn: "1234",
  title: 'A good book',
  author: 'Someone Famous'
}];

const typeDefs = gql`
  type Query {
    books: [Book]
    book(isbn: String!): Book
  }

  type Mutation {
    addBook(isbn: String!, title: String!, author: String!): [Book]
  }

  type Book {
    isbn: String!
    title: String!
    author: String!
  }
`;
 
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, context, info) => {
      return books.find(
        (book) => book.isbn === args.isbn
      );
    }
  },
  Mutation: {
    addBook: (arent, args, context, info) => {
      books.push(args);
      return books;
    }
  }
};
 
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(5000, () =>
  console.log('Server Started http://localhost:5000' + server.graphqlPath)
);
