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
  },
});

export default theme;
