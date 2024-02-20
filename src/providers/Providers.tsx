import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import ApolloClientProvider from "./ApolloClient";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ApolloClientProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ApolloClientProvider>
    </LocalizationProvider>
  );
}

export default Providers;
