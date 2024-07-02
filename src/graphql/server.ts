import fs from "node:fs";
import { ApolloServer, type BaseContext } from "@apollo/server";

import * as repository from "../users/repository";
import type { Resolvers } from "../lib/codegen/types";

const typeDefs = fs.readFileSync("./schema.graphql", "utf-8");

const resolvers: Resolvers = {
  Query: {
    users: () => {
      return repository.get();
    },
    user: (_, input) => {
      const user = repository.getOne({
        id: input.id,
      });
      return user || null;
    }
  },
};

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

export default server;
