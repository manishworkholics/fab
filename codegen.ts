import { CodegenConfig } from "@graphql-codegen/cli";


const schema = "https://www.fabspaceai.com/api/graphql";


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