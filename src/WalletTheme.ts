import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const walletTheme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: purple[300]
        }
    },
    typography:  {}
});