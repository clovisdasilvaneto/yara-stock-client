import { Divider, Grid, Paper, Typography } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import { LayoutContainer, LayoutGrid } from "./styled";
import { PaperStyles } from "../../theme";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutGrid container spacing={6}>
        <Grid item xs={6} md={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={6} md={9}>
          <Paper sx={PaperStyles}>
            <Typography paragraph variant="h5" fontWeight={500}>
              {title}
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />
            {children}
          </Paper>
        </Grid>
      </LayoutGrid>
    </LayoutContainer>
  );
}

export default Layout;
