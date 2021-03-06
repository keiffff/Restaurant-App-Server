import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../context';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FilterInput = {
  offsetPage?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  range?: Maybe<Scalars['Int']>;
  freeword?: Maybe<Scalars['String']>;
  lunch?: Maybe<Scalars['Int']>;
  bottomLessCup?: Maybe<Scalars['Int']>;
  buffet?: Maybe<Scalars['Int']>;
  privateRoom?: Maybe<Scalars['Int']>;
  webReserve?: Maybe<Scalars['Int']>;
};

export type GetRestaurantsResponse = {
  __typename?: 'GetRestaurantsResponse';
  restaurants: Array<Restaurant>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  totalCount: Scalars['Int'];
  perPage: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  restaurants: GetRestaurantsResponse;
};

export type QueryRestaurantsArgs = {
  input?: Maybe<FilterInput>;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  openTime: Scalars['String'];
  nearStation: Scalars['String'];
  lunch?: Maybe<Scalars['Int']>;
  budget?: Maybe<Scalars['Int']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  FilterInput: FilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  GetRestaurantsResponse: ResolverTypeWrapper<GetRestaurantsResponse>;
  Restaurant: ResolverTypeWrapper<Restaurant>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  FilterInput: FilterInput;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  String: Scalars['String'];
  GetRestaurantsResponse: GetRestaurantsResponse;
  Restaurant: Restaurant;
  ID: Scalars['ID'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
};

export type GetRestaurantsResponseResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['GetRestaurantsResponse'] = ResolversParentTypes['GetRestaurantsResponse']
> = {
  restaurants?: Resolver<Array<ResolversTypes['Restaurant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  restaurants?: Resolver<ResolversTypes['GetRestaurantsResponse'], ParentType, ContextType, QueryRestaurantsArgs>;
};

export type RestaurantResolvers<
  ContextType = MyContext,
  ParentType extends ResolversParentTypes['Restaurant'] = ResolversParentTypes['Restaurant']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nearStation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lunch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  budget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContext> = {
  GetRestaurantsResponse?: GetRestaurantsResponseResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Restaurant?: RestaurantResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
