import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type routeError = { statusText: string; message: string };

export default function NotFound() {
  const error = useRouteError() as routeError;

  return (
    <Box
      height={"100%"}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <ErrorOutlineIcon sx={{ fontSize: 100 }} />

      <Typography paragraph variant="h1">
        Oops!
      </Typography>
      <Typography variant="h5">
        The server returned the following status:{" "}
        <b>{error.statusText || error.message}</b>
      </Typography>
    </Box>
  );
}
