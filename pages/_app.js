import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkMode = createTheme({
    palette: {
        mode: "dark"
    }
});


export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={darkMode}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
