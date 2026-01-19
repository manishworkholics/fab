import { gql } from "@apollo/client";

export const CREATE_QUOTE_MUTATION = gql`
  mutation createQuote($createQuoteInput: CreateQuoteInput!) {
    createQuote(createQuoteInput: $createQuoteInput) {
      quoteId
      title
      quoteType
      description
      quoteMaterials
      turnTime
      quoteFiles
      status
      hasNDA
      quoteName
    }
  }
`;

export const UPDATE_QUOTE_MUTATION = gql`
  mutation updateQuote($UpdateQuoteInput: UpdateQuoteInput!) {
    updateQuote(updateQuoteInput: $updateQuoteInput) {
      quoteId
      title
      quoteType
      description
      quoteMaterials
      turnTime
      quoteFiles
      status
      hasNDA
      quoteName
    }
  }
`;

export const DELETE_QUOTE_MUTATION = gql`
  mutation DeleteQuote($quoteId: String!) {
    deleteQuote(quoteId: $quoteId) {
      status
      message
    }
  }
`;
