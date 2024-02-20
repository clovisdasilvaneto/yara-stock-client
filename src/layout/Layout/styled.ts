import { Box, Grid, styled } from "@mui/material";

export const LayoutContainer = styled(Box)`
  flex-grow: 1;
  height: 100%;
  padding-top: 3rem;
  padding-inline: 2rem;
  background: #f3f3f3;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    && {
      height: initial;
      min-height: 100%;
      padding: 3rem 2rem;
    }
  }
`;

export const LayoutGrid = styled(Grid)`
  height: 100%;
`;
