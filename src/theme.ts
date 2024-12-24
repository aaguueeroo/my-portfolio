// theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#DFCD91',
        },
        secondary: {
            main: '#F8F9FA',
            dark: '#F8F9FA',
            light: '#212529',
        },
        background: {
            default: '#212529',
        },
    },
    typography: {
        fontFamily: 'Abel, JetBrains Mono, Anton',
        allVariants: {
            color: '#F8F9FA',
        },
        h1: {
            fontFamily: 'JetBrains Mono',
            fontWeight: 'bold',
            fontSize: '3rem',
        },
        h2: {
            fontFamily: 'JetBrains Mono',
            fontWeight: 'bold',
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: 'JetBrains Mono',
            fontWeight: 'bold',
        },
        h4: {
            fontFamily: 'JetBrains Mono',
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: 'JetBrains Mono',
            fontSize: '1.4rem',
        },
        body1: {
            fontSize: '1.1rem',
            color: '#F8F9FA',
        },
    },
    spacing: 4,
});

export default responsiveFontSizes(theme);
