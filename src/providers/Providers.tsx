import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import ApolloClientProvider from "./ApolloClient";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ApolloClientProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloClientProvider>
  );
}

export default Providers;
