import { ThemeProvider } from "@mui/material";
import theme from "../theme";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Providers;
