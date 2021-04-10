import { IResolvers } from "graphql-tools";

const resolver: IResolvers = {
  Query: {
    hello: () => "Hello",
  },
};

export default resolver;
