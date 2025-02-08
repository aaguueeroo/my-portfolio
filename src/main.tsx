import "./theme/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles"; // Correct import for ThemeProvider
import HomePage from "./pages/home/HomePage";
import theme from "./theme/theme"; // Your custom theme
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
