/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";
import theme from "./theme";

import "./tailwind.css";
import "./globals.css";

import App from "./App";

render(
    () => (
        <HopeProvider config={theme}>
            <App />
        </HopeProvider>
    ),
    document.getElementById("root")
);
