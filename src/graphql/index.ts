import "graphql-import-node";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import rootSchema from "./schema/schema.graphql";
import resolvers from "./resolvers/resolversMap";

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers,
});
