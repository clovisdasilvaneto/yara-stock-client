import { createTheme } from "@mui/material";

export const PaperStyles = {
  height: "100%",
  borderRadius: 5,
  padding: 5,
};

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: 20,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          "&.MuiDrawer-paperAnchorLeft": {
            ...PaperStyles,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          "&.MuiDrawer-paperAnchorRight": {
            ...PaperStyles,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      },
    },
  },
});

export default theme;
