import { API_BASE_URL } from '@/config/services';
import { CookieKey, getValueCookie } from '@/utils/cookies';
import type { ApolloLink } from '@apollo/client';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(() => {});

const authLink = setContext(async (_, { headers, _shouldAuthorize }) => {
  if (!_shouldAuthorize) return headers as ApolloLink;

  const accessToken = await getValueCookie(CookieKey.accessToken);

  return {
    headers: {
      ...headers,
      authorization: accessToken || '',
    },
  };
});
const httpLink = new HttpLink({ uri: API_BASE_URL });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink, httpLink]),
});

export default client;
