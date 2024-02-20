import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// TODO: move it to a .env file
const API_ENDPOINT = "https://yara-stock-service.onrender.com/graphql"

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
});

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;
