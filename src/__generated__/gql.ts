/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation createQuote($createQuoteInput: CreateQuoteInput!) {\n  createQuote(createQuoteInput: $createQuoteInput) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n  }\n}": typeof types.CreateQuoteDocument,
    "mutation DeleteQuote($quoteId: String!) {\n  deleteQuote(quoteId: $quoteId) {\n    status\n    message\n  }\n}": typeof types.DeleteQuoteDocument,
    "mutation LoginUser($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      role\n    }\n  }\n}": typeof types.LoginUserDocument,
    "mutation PlaceBidForQuote($quoteId: String!, $detailedBidInput: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $detailedBidInput) {\n    id\n  }\n}": typeof types.PlaceBidForQuoteDocument,
    "mutation PlaceDetailedBid($quoteId: String!, $input: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $input) {\n    id\n    amount\n    createdAt\n  }\n}": typeof types.PlaceDetailedBidDocument,
    "mutation RegisterUser($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      username\n      role\n    }\n  }\n}": typeof types.RegisterUserDocument,
    "mutation updateQuote($updateQuoteInput: UpdateQuoteInput!, $quoteId: String!) {\n  updateQuote(updateQuoteInput: $updateQuoteInput, quoteId: $quoteId) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n    quoteName\n  }\n}": typeof types.UpdateQuoteDocument,
    "query DetailedBidByID($bidId: String!) {\n  detailedBid(bidId: $bidId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n      email\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}": typeof types.DetailedBidByIdDocument,
    "query DetailedBidsForQuote($quoteId: String!) {\n  detailedBidsForQuote(quoteId: $quoteId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}": typeof types.DetailedBidsForQuoteDocument,
    "query MyBids {\n  myBids {\n    id\n    amount\n    status\n    createdAt\n    quote {\n      quoteId\n      title\n      status\n    }\n  }\n}": typeof types.MyBidsDocument,
    "query GetMyQuotes($params: FindAllQuotesInput) {\n  myQuotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        userId\n        amount\n        userId\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}": typeof types.GetMyQuotesDocument,
    "query GetQuote($quoteId: String!) {\n  quote(quoteId: $quoteId) {\n    quoteId\n    title\n    description\n    quoteType\n    quoteMaterials\n    quoteFiles\n    budget\n    turnTime\n    status\n    isArchived\n    createdAt\n    quoteName\n    updatedAt\n    userSignedNDA\n    hasNDA\n    user {\n      id\n      username\n      firstName\n      lastName\n    }\n    assignedEMS {\n      id\n      role\n      username\n    }\n    bids {\n      bidderId\n      amount\n      createdAt\n    }\n  }\n}": typeof types.GetQuoteDocument,
    "query GetQuotes($params: FindAllQuotesInput) {\n  quotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}": typeof types.GetQuotesDocument,
    "query MyFavoriteQuotes {\n  myFavoriteQuotes {\n    quoteId\n    title\n    status\n    budget\n    createdAt\n    user {\n      id\n      email\n    }\n  }\n}": typeof types.MyFavoriteQuotesDocument,
    "query GetAllUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    phone\n    role\n    profile {\n      id\n      bio\n    }\n    createdAt\n    verifiedAt\n    updatedAt\n  }\n}": typeof types.GetAllUsersDocument,
};
const documents: Documents = {
    "mutation createQuote($createQuoteInput: CreateQuoteInput!) {\n  createQuote(createQuoteInput: $createQuoteInput) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n  }\n}": types.CreateQuoteDocument,
    "mutation DeleteQuote($quoteId: String!) {\n  deleteQuote(quoteId: $quoteId) {\n    status\n    message\n  }\n}": types.DeleteQuoteDocument,
    "mutation LoginUser($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      role\n    }\n  }\n}": types.LoginUserDocument,
    "mutation PlaceBidForQuote($quoteId: String!, $detailedBidInput: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $detailedBidInput) {\n    id\n  }\n}": types.PlaceBidForQuoteDocument,
    "mutation PlaceDetailedBid($quoteId: String!, $input: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $input) {\n    id\n    amount\n    createdAt\n  }\n}": types.PlaceDetailedBidDocument,
    "mutation RegisterUser($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      username\n      role\n    }\n  }\n}": types.RegisterUserDocument,
    "mutation updateQuote($updateQuoteInput: UpdateQuoteInput!, $quoteId: String!) {\n  updateQuote(updateQuoteInput: $updateQuoteInput, quoteId: $quoteId) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n    quoteName\n  }\n}": types.UpdateQuoteDocument,
    "query DetailedBidByID($bidId: String!) {\n  detailedBid(bidId: $bidId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n      email\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}": types.DetailedBidByIdDocument,
    "query DetailedBidsForQuote($quoteId: String!) {\n  detailedBidsForQuote(quoteId: $quoteId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}": types.DetailedBidsForQuoteDocument,
    "query MyBids {\n  myBids {\n    id\n    amount\n    status\n    createdAt\n    quote {\n      quoteId\n      title\n      status\n    }\n  }\n}": types.MyBidsDocument,
    "query GetMyQuotes($params: FindAllQuotesInput) {\n  myQuotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        userId\n        amount\n        userId\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}": types.GetMyQuotesDocument,
    "query GetQuote($quoteId: String!) {\n  quote(quoteId: $quoteId) {\n    quoteId\n    title\n    description\n    quoteType\n    quoteMaterials\n    quoteFiles\n    budget\n    turnTime\n    status\n    isArchived\n    createdAt\n    quoteName\n    updatedAt\n    userSignedNDA\n    hasNDA\n    user {\n      id\n      username\n      firstName\n      lastName\n    }\n    assignedEMS {\n      id\n      role\n      username\n    }\n    bids {\n      bidderId\n      amount\n      createdAt\n    }\n  }\n}": types.GetQuoteDocument,
    "query GetQuotes($params: FindAllQuotesInput) {\n  quotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}": types.GetQuotesDocument,
    "query MyFavoriteQuotes {\n  myFavoriteQuotes {\n    quoteId\n    title\n    status\n    budget\n    createdAt\n    user {\n      id\n      email\n    }\n  }\n}": types.MyFavoriteQuotesDocument,
    "query GetAllUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    phone\n    role\n    profile {\n      id\n      bio\n    }\n    createdAt\n    verifiedAt\n    updatedAt\n  }\n}": types.GetAllUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation createQuote($createQuoteInput: CreateQuoteInput!) {\n  createQuote(createQuoteInput: $createQuoteInput) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n  }\n}"): (typeof documents)["mutation createQuote($createQuoteInput: CreateQuoteInput!) {\n  createQuote(createQuoteInput: $createQuoteInput) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation DeleteQuote($quoteId: String!) {\n  deleteQuote(quoteId: $quoteId) {\n    status\n    message\n  }\n}"): (typeof documents)["mutation DeleteQuote($quoteId: String!) {\n  deleteQuote(quoteId: $quoteId) {\n    status\n    message\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation LoginUser($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      role\n    }\n  }\n}"): (typeof documents)["mutation LoginUser($input: LoginInput!) {\n  login(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      role\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation PlaceBidForQuote($quoteId: String!, $detailedBidInput: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $detailedBidInput) {\n    id\n  }\n}"): (typeof documents)["mutation PlaceBidForQuote($quoteId: String!, $detailedBidInput: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $detailedBidInput) {\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation PlaceDetailedBid($quoteId: String!, $input: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $input) {\n    id\n    amount\n    createdAt\n  }\n}"): (typeof documents)["mutation PlaceDetailedBid($quoteId: String!, $input: DetailedBidInput!) {\n  placeDetailedBid(quoteId: $quoteId, detailedBidInput: $input) {\n    id\n    amount\n    createdAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation RegisterUser($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      username\n      role\n    }\n  }\n}"): (typeof documents)["mutation RegisterUser($input: RegisterInput!) {\n  register(input: $input) {\n    accessToken\n    refreshToken\n    user {\n      id\n      firstName\n      lastName\n      email\n      username\n      role\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation updateQuote($updateQuoteInput: UpdateQuoteInput!, $quoteId: String!) {\n  updateQuote(updateQuoteInput: $updateQuoteInput, quoteId: $quoteId) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n    quoteName\n  }\n}"): (typeof documents)["mutation updateQuote($updateQuoteInput: UpdateQuoteInput!, $quoteId: String!) {\n  updateQuote(updateQuoteInput: $updateQuoteInput, quoteId: $quoteId) {\n    quoteId\n    title\n    quoteType\n    description\n    quoteMaterials\n    turnTime\n    quoteFiles\n    status\n    hasNDA\n    quoteName\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query DetailedBidByID($bidId: String!) {\n  detailedBid(bidId: $bidId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n      email\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}"): (typeof documents)["query DetailedBidByID($bidId: String!) {\n  detailedBid(bidId: $bidId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n      email\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query DetailedBidsForQuote($quoteId: String!) {\n  detailedBidsForQuote(quoteId: $quoteId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}"): (typeof documents)["query DetailedBidsForQuote($quoteId: String!) {\n  detailedBidsForQuote(quoteId: $quoteId) {\n    id\n    amount\n    bidderId\n    createdAt\n    bidder {\n      id\n      firstName\n      lastName\n    }\n    additionalNotes\n    projectApproach {\n      relevantExperience\n      technicalApproach\n      estimatedTimeline\n    }\n    pricingBreakdown {\n      description\n      unitPrice\n      quantity\n      totalPrice\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query MyBids {\n  myBids {\n    id\n    amount\n    status\n    createdAt\n    quote {\n      quoteId\n      title\n      status\n    }\n  }\n}"): (typeof documents)["query MyBids {\n  myBids {\n    id\n    amount\n    status\n    createdAt\n    quote {\n      quoteId\n      title\n      status\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMyQuotes($params: FindAllQuotesInput) {\n  myQuotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        userId\n        amount\n        userId\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}"): (typeof documents)["query GetMyQuotes($params: FindAllQuotesInput) {\n  myQuotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        userId\n        amount\n        userId\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetQuote($quoteId: String!) {\n  quote(quoteId: $quoteId) {\n    quoteId\n    title\n    description\n    quoteType\n    quoteMaterials\n    quoteFiles\n    budget\n    turnTime\n    status\n    isArchived\n    createdAt\n    quoteName\n    updatedAt\n    userSignedNDA\n    hasNDA\n    user {\n      id\n      username\n      firstName\n      lastName\n    }\n    assignedEMS {\n      id\n      role\n      username\n    }\n    bids {\n      bidderId\n      amount\n      createdAt\n    }\n  }\n}"): (typeof documents)["query GetQuote($quoteId: String!) {\n  quote(quoteId: $quoteId) {\n    quoteId\n    title\n    description\n    quoteType\n    quoteMaterials\n    quoteFiles\n    budget\n    turnTime\n    status\n    isArchived\n    createdAt\n    quoteName\n    updatedAt\n    userSignedNDA\n    hasNDA\n    user {\n      id\n      username\n      firstName\n      lastName\n    }\n    assignedEMS {\n      id\n      role\n      username\n    }\n    bids {\n      bidderId\n      amount\n      createdAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetQuotes($params: FindAllQuotesInput) {\n  quotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}"): (typeof documents)["query GetQuotes($params: FindAllQuotesInput) {\n  quotes(params: $params) {\n    quotes {\n      quoteId\n      description\n      title\n      quoteMaterials\n      turnTime\n      quoteFiles\n      quoteType\n      status\n      budget\n      assignedEMSId\n      isArchived\n      userSignedNDA\n      quoteName\n      hasNDA\n      bids {\n        bidderId\n        amount\n      }\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        phone\n        role\n        profile {\n          id\n          bio\n          location\n          jobRole\n          projectBuildType\n        }\n      }\n      updatedAt\n      createdAt\n    }\n    totalCount\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query MyFavoriteQuotes {\n  myFavoriteQuotes {\n    quoteId\n    title\n    status\n    budget\n    createdAt\n    user {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["query MyFavoriteQuotes {\n  myFavoriteQuotes {\n    quoteId\n    title\n    status\n    budget\n    createdAt\n    user {\n      id\n      email\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAllUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    phone\n    role\n    profile {\n      id\n      bio\n    }\n    createdAt\n    verifiedAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetAllUsers {\n  users {\n    id\n    username\n    email\n    firstName\n    lastName\n    phone\n    role\n    profile {\n      id\n      bio\n    }\n    createdAt\n    verifiedAt\n    updatedAt\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;