import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/little-lemon-theme.js";
import App from "./App.jsx";
import "./index.css";
import { CurrentBookingProvider } from "./context/bookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <CurrentBookingProvider>
          <App />
        </CurrentBookingProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
