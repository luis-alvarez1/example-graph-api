import express from "express";
import cors from "cors";
import { schema } from "./graphql";
import { ApolloServer } from "apollo-server-express";

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(1500, () => {
  console.log(`server running on http://localhost:1500/graphql/`);
});
