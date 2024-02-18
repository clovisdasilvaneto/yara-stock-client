import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          height: "100%",
          borderRadius: 5,
          padding: 5,
        },
      },
    },
  },
});

export default theme;
