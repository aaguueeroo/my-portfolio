// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import the theme

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>  {/* Apply theme here */}
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
