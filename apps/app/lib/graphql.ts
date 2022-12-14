import {GraphQLClient} from 'graphql-request'
import {getSdk} from './subsquidSdk'

export const subsquidClient = new GraphQLClient(
  // process.env.NEXT_PUBLIC_SUBSQUID_URL ??
  'https://squid.subsquid.io/khala-test/v/pc3/graphql'
)
export const subsquidSdk = getSdk(subsquidClient)
