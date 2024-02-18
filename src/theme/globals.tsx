import GlobalStyles from "@mui/material/GlobalStyles";

const globals = (
  <GlobalStyles
    styles={{
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        boxSizing: "border-box",
        height: "100%",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      body: {
        height: "100%",
        padding: 0,
        margin: 0,
      },
      "#root": {
        height: "100%",
      },
    }}
  />
);

export default globals;
