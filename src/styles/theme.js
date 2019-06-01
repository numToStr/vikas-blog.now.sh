import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: grey,
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: [
            "Roboto Mono",
            "monospace",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
});

export default theme;
