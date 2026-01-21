/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type BasicResponse = {
  __typename?: 'BasicResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Bid = {
  __typename?: 'Bid';
  amount: Scalars['Float']['output'];
  bidder: User;
  bidderId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  quote: Quote;
  quoteId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CompleteProfileInput = {
  EMSAvailabilityStatus?: InputMaybe<EmsAvailabilityStatus>;
  bio?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<Scalars['String']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  employeeRange?: InputMaybe<Scalars['String']['input']>;
  equipmentList?: InputMaybe<Array<Scalars['String']['input']>>;
  establishedYear?: InputMaybe<Scalars['Int']['input']>;
  facilityVideoUrl?: InputMaybe<Scalars['String']['input']>;
  jobRole?: InputMaybe<ProfileJobRole>;
  location?: InputMaybe<Scalars['String']['input']>;
  manufacturingCapabilities?: InputMaybe<Array<Scalars['String']['input']>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  projectBuildType?: InputMaybe<ProjectBuildType>;
  specialties?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateQuoteInput = {
  assignedEMSId?: InputMaybe<Scalars['Int']['input']>;
  budget: Scalars['Float']['input'];
  components?: InputMaybe<Scalars['Float']['input']>;
  description: Scalars['String']['input'];
  hasNDA?: InputMaybe<Scalars['Boolean']['input']>;
  isDraft?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfBoards?: InputMaybe<Array<Scalars['String']['input']>>;
  pcbBoards?: InputMaybe<Scalars['Float']['input']>;
  quoteFiles: Array<Scalars['String']['input']>;
  quoteMaterials: Array<Scalars['String']['input']>;
  quoteName: Scalars['String']['input'];
  quoteType: QuoteType;
  stencils?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
  turnTime: Scalars['Float']['input'];
};

export type DetailedBidInput = {
  additionalNotes?: InputMaybe<Scalars['String']['input']>;
  estimatedTimeline?: InputMaybe<Scalars['String']['input']>;
  pricingBreakdown: Array<PricingLineItemInput>;
  relevantExperience?: InputMaybe<Scalars['String']['input']>;
  technicalApproach?: InputMaybe<Scalars['String']['input']>;
};

export type DetailedBidResponse = {
  __typename?: 'DetailedBidResponse';
  additionalNotes?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  bidder: User;
  bidderId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  pricingBreakdown?: Maybe<Array<PricingLineItem>>;
  projectApproach?: Maybe<ProjectApproach>;
  quote: Quote;
  quoteId: Scalars['String']['output'];
  totalEstimatedCost?: Maybe<Scalars['Float']['output']>;
};

export type Ems = {
  __typename?: 'EMS';
  EMSAvailabilityStatus?: Maybe<EmsAvailabilityStatus>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** EMS Availability Status */
export enum EmsAvailabilityStatus {
  Active = 'ACTIVE',
  NotAvailable = 'NOT_AVAILABLE',
  Open = 'OPEN'
}

export type EmsManufacturer = {
  __typename?: 'EMSManufacturer';
  assemblySpecifications?: Maybe<Scalars['String']['output']>;
  capabilities?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Scalars['String']['output']>;
  constraints?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Scalars['String']['output']>;
  emsType?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industries?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  manufacturingSpecifications?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type EmsProfileDto = {
  __typename?: 'EMSProfileDTO';
  EMSAvailabilityStatus?: Maybe<EmsAvailabilityStatus>;
  bio?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Scalars['String']['output']>>;
  companyName?: Maybe<Scalars['String']['output']>;
  employeeRange?: Maybe<Scalars['String']['output']>;
  equipmentList?: Maybe<Array<Scalars['String']['output']>>;
  establishedYear?: Maybe<Scalars['Float']['output']>;
  facilityVideoUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  jobRole?: Maybe<ProfileJobRole>;
  location?: Maybe<Scalars['String']['output']>;
  manufacturingCapabilities?: Maybe<Array<Scalars['String']['output']>>;
  projectBuildType?: Maybe<ProjectBuildType>;
  specialties?: Maybe<Array<Scalars['String']['output']>>;
};

export type FindAllQuotesInput = {
  filters?: InputMaybe<QuoteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SortBy>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type LoginInput = {
  /** User Email */
  email: Scalars['String']['input'];
  /** User Password */
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToFavorites: Scalars['Boolean']['output'];
  archiveQuote: BasicResponse;
  completeEMSProfile: Scalars['Boolean']['output'];
  createQuote: Quote;
  deleteQuote: BasicResponse;
  login: AuthResponse;
  logout: BasicResponse;
  placeBid: Bid;
  placeDetailedBid: Bid;
  register: AuthResponse;
  removeFromFavorites: Scalars['Boolean']['output'];
  requestEmailVerification: BasicResponse;
  signNDA: BasicResponse;
  updateMe: UserResponse;
  updateProjectStatus: Scalars['Boolean']['output'];
  updateQuote: Quote;
  verifyEmail: BasicResponse;
  withdrawQuoteBid: Scalars['Boolean']['output'];
};


export type MutationAddToFavoritesArgs = {
  quoteId: Scalars['String']['input'];
};


export type MutationArchiveQuoteArgs = {
  quoteId: Scalars['String']['input'];
};


export type MutationCompleteEmsProfileArgs = {
  input: CompleteProfileInput;
};


export type MutationCreateQuoteArgs = {
  createQuoteInput: CreateQuoteInput;
};


export type MutationDeleteQuoteArgs = {
  quoteId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPlaceBidArgs = {
  placeBidInput: PlaceBidInput;
  quoteId: Scalars['String']['input'];
};


export type MutationPlaceDetailedBidArgs = {
  detailedBidInput: DetailedBidInput;
  quoteId: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveFromFavoritesArgs = {
  quoteId: Scalars['String']['input'];
};


export type MutationSignNdaArgs = {
  quoteId: Scalars['String']['input'];
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateProjectStatusArgs = {
  note?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateQuoteArgs = {
  quoteId: Scalars['String']['input'];
  updateQuoteInput: UpdateQuoteInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationWithdrawQuoteBidArgs = {
  bidId: Scalars['String']['input'];
};

export type Otp = {
  __typename?: 'Otp';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type PlaceBidInput = {
  amount: Scalars['Float']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
};

export type PricingLineItem = {
  __typename?: 'PricingLineItem';
  description: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  totalPrice: Scalars['Float']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type PricingLineItemInput = {
  description: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  totalPrice: Scalars['Float']['input'];
  unitPrice: Scalars['Float']['input'];
};

export type Profile = {
  __typename?: 'Profile';
  EMSAvailabilityStatus?: Maybe<EmsAvailabilityStatus>;
  bio?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Scalars['String']['output']>>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  employeeRange?: Maybe<Scalars['String']['output']>;
  equipmentList?: Maybe<Array<Scalars['String']['output']>>;
  establishedYear?: Maybe<Scalars['Float']['output']>;
  facilityVideoUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  jobRole?: Maybe<ProfileJobRole>;
  location?: Maybe<Scalars['String']['output']>;
  manufacturingCapabilities?: Maybe<Array<Scalars['String']['output']>>;
  projectBuildType?: Maybe<ProjectBuildType>;
  projectsCompleted?: Maybe<Scalars['Float']['output']>;
  specialties?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export enum ProfileJobRole {
  ContractManufacturer = 'CONTRACT_MANUFACTURER',
  DesignEngineer = 'DESIGN_ENGINEER',
  ElectronicManufacturingService = 'ELECTRONIC_MANUFACTURING_SERVICE',
  PurchasingEngineer = 'PURCHASING_ENGINEER'
}

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
};

export type ProjectApproach = {
  __typename?: 'ProjectApproach';
  estimatedTimeline?: Maybe<Scalars['String']['output']>;
  relevantExperience?: Maybe<Scalars['String']['output']>;
  technicalApproach?: Maybe<Scalars['String']['output']>;
};

/** Project Build Type */
export enum ProjectBuildType {
  Pcb = 'PCB'
}

export type Query = {
  __typename?: 'Query';
  availableEMS: Array<Ems>;
  detailedBid: DetailedBidResponse;
  detailedBidsForQuote: Array<DetailedBidResponse>;
  ems: Array<Ems>;
  emsDetails: Ems;
  /** Get a specific EMS manufacturer by ID */
  emsManufacturer?: Maybe<EmsManufacturer>;
  /** Get all EMS manufacturers */
  emsManufacturers: Array<EmsManufacturer>;
  /** Find EMS manufacturers by location */
  emsManufacturersByLocation: Array<EmsManufacturer>;
  /** Find EMS manufacturers by location (only manufacturers) */
  emsManufacturersByLocationAndType: Array<EmsManufacturer>;
  /** Get all EMS manufacturers only (excludes pure suppliers) */
  emsManufacturersOnly: Array<EmsManufacturer>;
  emsOpenQuotes: Array<Quote>;
  /** Find EMS suppliers by location */
  emsSuppliersByLocation: Array<EmsManufacturer>;
  /** Get all EMS suppliers only (excludes pure manufacturers) */
  emsSuppliersOnly: Array<EmsManufacturer>;
  findAllCompanies: Array<Company>;
  getAllEMS: Array<EmsProfileDto>;
  getEMSById?: Maybe<EmsProfileDto>;
  isFavorite: Scalars['Boolean']['output'];
  me: User;
  myBids: Array<Bid>;
  myDraftQuote: Quote;
  myDraftQuotes: Array<Quote>;
  myFavoriteQuotes: Array<Quote>;
  myProjectsAsEMS: Array<Project>;
  myProjectsAsPM: Array<Project>;
  myQuotes: Quotes;
  quickQuotations: Array<Quote>;
  quote: Quote;
  quotes: Quotes;
  /** Search EMS manufacturers by name, location, certifications, industries, or type */
  searchEMSManufacturers: Array<EmsManufacturer>;
  user: User;
  users: Array<User>;
};


export type QueryDetailedBidArgs = {
  bidId: Scalars['String']['input'];
};


export type QueryDetailedBidsForQuoteArgs = {
  quoteId: Scalars['String']['input'];
};


export type QueryEmsDetailsArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEmsManufacturerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEmsManufacturersByLocationArgs = {
  location: Scalars['String']['input'];
};


export type QueryEmsManufacturersByLocationAndTypeArgs = {
  location: Scalars['String']['input'];
};


export type QueryEmsSuppliersByLocationArgs = {
  location: Scalars['String']['input'];
};


export type QueryFindAllCompaniesArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryIsFavoriteArgs = {
  quoteId: Scalars['String']['input'];
};


export type QueryMyDraftQuoteArgs = {
  quoteId: Scalars['String']['input'];
};


export type QueryMyQuotesArgs = {
  params?: InputMaybe<FindAllQuotesInput>;
};


export type QueryQuoteArgs = {
  quoteId: Scalars['String']['input'];
};


export type QueryQuotesArgs = {
  params?: InputMaybe<FindAllQuotesInput>;
};


export type QuerySearchEmsManufacturersArgs = {
  query: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Quote = {
  __typename?: 'Quote';
  assignedEMS?: Maybe<User>;
  assignedEMSId?: Maybe<Scalars['Int']['output']>;
  bids?: Maybe<Array<Bid>>;
  budget: Scalars['Float']['output'];
  components?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hasNDA: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  numberOfBoards?: Maybe<Array<Scalars['String']['output']>>;
  pcbBoards?: Maybe<Scalars['Float']['output']>;
  quoteFiles: Array<Scalars['String']['output']>;
  quoteId?: Maybe<Scalars['String']['output']>;
  quoteMaterials: Array<Scalars['String']['output']>;
  quoteName: Scalars['String']['output'];
  quoteType: QuoteType;
  status: QuoteStatus;
  stencils?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  turnTime?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userSignedNDA?: Maybe<Scalars['Boolean']['output']>;
};

export type QuoteFilterInput = {
  components?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  pcbBoards?: InputMaybe<Scalars['Float']['input']>;
  quoteType?: InputMaybe<QuoteType>;
  status?: InputMaybe<QuoteStatus>;
  stencils?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** quote status */
export enum QuoteStatus {
  Assigned = 'ASSIGNED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Withdrawn = 'WITHDRAWN'
}

/** quote types */
export enum QuoteType {
  FixedQuote = 'FIXED_QUOTE',
  OpenQuote = 'OPEN_QUOTE',
  QuickQuote = 'QUICK_QUOTE'
}

export type Quotes = {
  __typename?: 'Quotes';
  quotes: Array<Quote>;
  totalCount: Scalars['Int']['output'];
};

export type RegisterInput = {
  acceptTerms: Scalars['Boolean']['input'];
  companyName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Sort by */
export enum SortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Sort order */
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateMeInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UpdateProfileInput>;
  userRole?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  jobRole?: InputMaybe<ProfileJobRole>;
  location?: InputMaybe<Scalars['String']['input']>;
  projectBuildType?: InputMaybe<ProjectBuildType>;
};

export type UpdateQuoteInput = {
  assignedEMSId?: InputMaybe<Scalars['Int']['input']>;
  budget?: InputMaybe<Scalars['Float']['input']>;
  components?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hasNDA?: InputMaybe<Scalars['Boolean']['input']>;
  isDraft?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfBoards?: InputMaybe<Array<Scalars['String']['input']>>;
  pcbBoards?: InputMaybe<Scalars['Float']['input']>;
  quoteFiles?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteMaterials?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteName?: InputMaybe<Scalars['String']['input']>;
  quoteType?: InputMaybe<QuoteType>;
  stencils?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  turnTime?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  company?: Maybe<Company>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  otps?: Maybe<Array<Otp>>;
  phone?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  role?: Maybe<UserRole>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user: User;
};

/** user roles */
export enum UserRole {
  Ems = 'EMS',
  Pm = 'PM',
  Talents = 'TALENTS',
  TalentManager = 'TALENT_MANAGER'
}

export type CreateQuoteMutationVariables = Exact<{
  createQuoteInput: CreateQuoteInput;
}>;


export type CreateQuoteMutation = { __typename?: 'Mutation', createQuote: { __typename?: 'Quote', quoteId?: string | null, title?: string | null, quoteType: QuoteType, description?: string | null, quoteMaterials: Array<string>, turnTime?: number | null, quoteFiles: Array<string>, status: QuoteStatus, hasNDA: boolean } };

export type DeleteQuoteMutationVariables = Exact<{
  quoteId: Scalars['String']['input'];
}>;


export type DeleteQuoteMutation = { __typename?: 'Mutation', deleteQuote: { __typename?: 'BasicResponse', status?: string | null, message?: string | null } };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string, role?: UserRole | null } } };

export type PlaceBidForQuoteMutationVariables = Exact<{
  quoteId: Scalars['String']['input'];
  detailedBidInput: DetailedBidInput;
}>;


export type PlaceBidForQuoteMutation = { __typename?: 'Mutation', placeDetailedBid: { __typename?: 'Bid', id: string } };

export type PlaceDetailedBidMutationVariables = Exact<{
  quoteId: Scalars['String']['input'];
  input: DetailedBidInput;
}>;


export type PlaceDetailedBidMutation = { __typename?: 'Mutation', placeDetailedBid: { __typename?: 'Bid', id: string, amount: number, createdAt: any } };

export type RegisterUserMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string, username?: string | null, role?: UserRole | null } } };

export type UpdateQuoteMutationVariables = Exact<{
  updateQuoteInput: UpdateQuoteInput;
  quoteId: Scalars['String']['input'];
}>;


export type UpdateQuoteMutation = { __typename?: 'Mutation', updateQuote: { __typename?: 'Quote', quoteId?: string | null, title?: string | null, quoteType: QuoteType, description?: string | null, quoteMaterials: Array<string>, turnTime?: number | null, quoteFiles: Array<string>, status: QuoteStatus, hasNDA: boolean, quoteName: string } };

export type DetailedBidByIdQueryVariables = Exact<{
  bidId: Scalars['String']['input'];
}>;


export type DetailedBidByIdQuery = { __typename?: 'Query', detailedBid: { __typename?: 'DetailedBidResponse', id: string, amount: number, bidderId: number, createdAt: any, additionalNotes?: string | null, bidder: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string }, projectApproach?: { __typename?: 'ProjectApproach', relevantExperience?: string | null, technicalApproach?: string | null, estimatedTimeline?: string | null } | null, pricingBreakdown?: Array<{ __typename?: 'PricingLineItem', description: string, unitPrice: number, quantity: number, totalPrice: number }> | null } };

export type DetailedBidsForQuoteQueryVariables = Exact<{
  quoteId: Scalars['String']['input'];
}>;


export type DetailedBidsForQuoteQuery = { __typename?: 'Query', detailedBidsForQuote: Array<{ __typename?: 'DetailedBidResponse', id: string, amount: number, bidderId: number, createdAt: any, additionalNotes?: string | null, bidder: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }, projectApproach?: { __typename?: 'ProjectApproach', relevantExperience?: string | null, technicalApproach?: string | null, estimatedTimeline?: string | null } | null, pricingBreakdown?: Array<{ __typename?: 'PricingLineItem', description: string, unitPrice: number, quantity: number, totalPrice: number }> | null }> };

export type MyBidsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyBidsQuery = { __typename?: 'Query', myBids: Array<{ __typename?: 'Bid', id: string, amount: number, status: string, createdAt: any, quote: { __typename?: 'Quote', quoteId?: string | null, title?: string | null, status: QuoteStatus } }> };

export type GetMyQuotesQueryVariables = Exact<{
  params?: InputMaybe<FindAllQuotesInput>;
}>;


export type GetMyQuotesQuery = { __typename?: 'Query', myQuotes: { __typename?: 'Quotes', totalCount: number, quotes: Array<{ __typename?: 'Quote', quoteId?: string | null, description?: string | null, title?: string | null, quoteMaterials: Array<string>, turnTime?: number | null, quoteFiles: Array<string>, quoteType: QuoteType, status: QuoteStatus, budget: number, assignedEMSId?: number | null, isArchived: boolean, userSignedNDA?: boolean | null, quoteName: string, hasNDA: boolean, updatedAt: any, createdAt: any, bids?: Array<{ __typename?: 'Bid', userId: number, amount: number, bidderId: number }> | null, user: { __typename?: 'User', id: string, username?: string | null, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null, role?: UserRole | null, profile?: { __typename?: 'Profile', id: number, bio?: string | null, location?: string | null, jobRole?: ProfileJobRole | null, projectBuildType?: ProjectBuildType | null } | null } }> } };

export type GetQuoteQueryVariables = Exact<{
  quoteId: Scalars['String']['input'];
}>;


export type GetQuoteQuery = { __typename?: 'Query', quote: { __typename?: 'Quote', quoteId?: string | null, title?: string | null, description?: string | null, quoteType: QuoteType, quoteMaterials: Array<string>, quoteFiles: Array<string>, budget: number, turnTime?: number | null, status: QuoteStatus, isArchived: boolean, createdAt: any, quoteName: string, updatedAt: any, userSignedNDA?: boolean | null, hasNDA: boolean, user: { __typename?: 'User', id: string, username?: string | null, firstName?: string | null, lastName?: string | null }, assignedEMS?: { __typename?: 'User', id: string, role?: UserRole | null, username?: string | null } | null, bids?: Array<{ __typename?: 'Bid', bidderId: number, amount: number, createdAt: any }> | null } };

export type GetQuotesQueryVariables = Exact<{
  params?: InputMaybe<FindAllQuotesInput>;
}>;


export type GetQuotesQuery = { __typename?: 'Query', quotes: { __typename?: 'Quotes', totalCount: number, quotes: Array<{ __typename?: 'Quote', quoteId?: string | null, description?: string | null, title?: string | null, quoteMaterials: Array<string>, turnTime?: number | null, quoteFiles: Array<string>, quoteType: QuoteType, status: QuoteStatus, budget: number, assignedEMSId?: number | null, isArchived: boolean, userSignedNDA?: boolean | null, quoteName: string, hasNDA: boolean, updatedAt: any, createdAt: any, bids?: Array<{ __typename?: 'Bid', bidderId: number, amount: number }> | null, user: { __typename?: 'User', id: string, username?: string | null, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null, role?: UserRole | null, profile?: { __typename?: 'Profile', id: number, bio?: string | null, location?: string | null, jobRole?: ProfileJobRole | null, projectBuildType?: ProjectBuildType | null } | null } }> } };

export type MyFavoriteQuotesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFavoriteQuotesQuery = { __typename?: 'Query', myFavoriteQuotes: Array<{ __typename?: 'Quote', quoteId?: string | null, title?: string | null, status: QuoteStatus, budget: number, createdAt: any, user: { __typename?: 'User', id: string, email: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username?: string | null, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null, role?: UserRole | null, createdAt: any, verifiedAt?: any | null, updatedAt: any, profile?: { __typename?: 'Profile', id: number, bio?: string | null } | null }> };


export const CreateQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createQuoteInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateQuoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createQuote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createQuoteInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createQuoteInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quoteType"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quoteMaterials"}},{"kind":"Field","name":{"kind":"Name","value":"turnTime"}},{"kind":"Field","name":{"kind":"Name","value":"quoteFiles"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"hasNDA"}}]}}]}}]} as unknown as DocumentNode<CreateQuoteMutation, CreateQuoteMutationVariables>;
export const DeleteQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteQuote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteQuoteMutation, DeleteQuoteMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const PlaceBidForQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceBidForQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"detailedBidInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DetailedBidInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeDetailedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"detailedBidInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"detailedBidInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PlaceBidForQuoteMutation, PlaceBidForQuoteMutationVariables>;
export const PlaceDetailedBidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PlaceDetailedBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DetailedBidInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeDetailedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"detailedBidInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<PlaceDetailedBidMutation, PlaceDetailedBidMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateQuoteInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateQuoteInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateQuote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateQuoteInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateQuoteInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quoteType"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quoteMaterials"}},{"kind":"Field","name":{"kind":"Name","value":"turnTime"}},{"kind":"Field","name":{"kind":"Name","value":"quoteFiles"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"hasNDA"}},{"kind":"Field","name":{"kind":"Name","value":"quoteName"}}]}}]}}]} as unknown as DocumentNode<UpdateQuoteMutation, UpdateQuoteMutationVariables>;
export const DetailedBidByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailedBidByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bidId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"detailedBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bidId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bidId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"bidderId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"bidder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalNotes"}},{"kind":"Field","name":{"kind":"Name","value":"projectApproach"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relevantExperience"}},{"kind":"Field","name":{"kind":"Name","value":"technicalApproach"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedTimeline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricingBreakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}}]}}]}}]}}]} as unknown as DocumentNode<DetailedBidByIdQuery, DetailedBidByIdQueryVariables>;
export const DetailedBidsForQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailedBidsForQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"detailedBidsForQuote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"bidderId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"bidder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalNotes"}},{"kind":"Field","name":{"kind":"Name","value":"projectApproach"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relevantExperience"}},{"kind":"Field","name":{"kind":"Name","value":"technicalApproach"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedTimeline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricingBreakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}}]}}]}}]}}]} as unknown as DocumentNode<DetailedBidsForQuoteQuery, DetailedBidsForQuoteQueryVariables>;
export const MyBidsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyBids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myBids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"quote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<MyBidsQuery, MyBidsQueryVariables>;
export const GetMyQuotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyQuotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FindAllQuotesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myQuotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"params"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quoteMaterials"}},{"kind":"Field","name":{"kind":"Name","value":"turnTime"}},{"kind":"Field","name":{"kind":"Name","value":"quoteFiles"}},{"kind":"Field","name":{"kind":"Name","value":"quoteType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"assignedEMSId"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"userSignedNDA"}},{"kind":"Field","name":{"kind":"Name","value":"quoteName"}},{"kind":"Field","name":{"kind":"Name","value":"hasNDA"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"bidderId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"jobRole"}},{"kind":"Field","name":{"kind":"Name","value":"projectBuildType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetMyQuotesQuery, GetMyQuotesQueryVariables>;
export const GetQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quoteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quoteType"}},{"kind":"Field","name":{"kind":"Name","value":"quoteMaterials"}},{"kind":"Field","name":{"kind":"Name","value":"quoteFiles"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"turnTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"quoteName"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userSignedNDA"}},{"kind":"Field","name":{"kind":"Name","value":"hasNDA"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedEMS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bidderId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetQuoteQuery, GetQuoteQueryVariables>;
export const GetQuotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FindAllQuotesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"params"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quoteMaterials"}},{"kind":"Field","name":{"kind":"Name","value":"turnTime"}},{"kind":"Field","name":{"kind":"Name","value":"quoteFiles"}},{"kind":"Field","name":{"kind":"Name","value":"quoteType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"assignedEMSId"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"userSignedNDA"}},{"kind":"Field","name":{"kind":"Name","value":"quoteName"}},{"kind":"Field","name":{"kind":"Name","value":"hasNDA"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bidderId"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"jobRole"}},{"kind":"Field","name":{"kind":"Name","value":"projectBuildType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetQuotesQuery, GetQuotesQueryVariables>;
export const MyFavoriteQuotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFavoriteQuotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myFavoriteQuotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<MyFavoriteQuotesQuery, MyFavoriteQuotesQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;