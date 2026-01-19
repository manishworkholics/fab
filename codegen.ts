import { CodegenConfig } from "@graphql-codegen/cli";

const schema = "http://172.208.69.80:9001/graphql";

const config: CodegenConfig = {
  schema,
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  documents: ["./src/graphiql/**/*.graphql"],
  ignoreNoDocuments: true,
};

export default config;