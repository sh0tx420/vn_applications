/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";

import "./tailwind.css";
import "./globals.css";

import App from "./App";

render(
    () => (
        <HopeProvider>
            <App />
        </HopeProvider>
    ),
    document.getElementById("root")
);
