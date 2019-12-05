require("dotenv").config();

import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildAppSchema } from "./schema";
import { PORT, GraphQLEndpoint } from "./endpoints";

process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit();
});

(async () => {
  await new ApolloServer({
    schema: await buildAppSchema()
  }).listen({ port: PORT });
  console.log(`GraphQL server running on ${GraphQLEndpoint}`);
})();
