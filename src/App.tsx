import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import StoreProvider from "./providers/StoreProvider";
import { GlobalStyle } from "./styles/global";
import Router from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

const container = document.getElementById("host-app");
const root = ReactDOMClient.createRoot(container!);

root.render(
	<StrictMode>
		<StoreProvider>
			<GlobalStyle />
			<BrowserRouter>
				<PersistGate loading={null} persistor={persistor}>
					<Router />
				</PersistGate>
			</BrowserRouter>
		</StoreProvider>
	</StrictMode>
);
