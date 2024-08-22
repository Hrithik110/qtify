import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  },
  palette: {
    primary: {
      main: "#00BD2B",
      light: "#00a278",
      contrastText: "#fff",
    },
    black: {
        main: "#000000", 
      },
  },
});

export default theme;
