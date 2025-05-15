import { createTheme } from '@mui/material/styles';

// Color palette
const colors = {
  primary: '#1A3C40',    // Warm Navy
  secondary: '#D6A77A',  // Soft Clay
  accent: '#A3B18A',     // Sage Green
  light: '#FAF3E0',      // Linen White
  dark: '#333533',       // Charcoal Gray
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.dark,
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: colors.dark,
      secondary: colors.primary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      color: colors.primary,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: colors.primary,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: colors.primary,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: colors.primary,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: colors.primary,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: colors.primary,
    },
    body1: {
      fontSize: '1.1rem',
      color: colors.dark,
    },
    body2: {
      fontSize: '1rem',
      color: colors.dark,
    },
    button: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1.1rem',
        },
        contained: {
          backgroundColor: colors.primary,
          '&:hover': {
            backgroundColor: colors.primary,
            opacity: 0.9,
          },
        },
        outlined: {
          borderColor: colors.primary,
          color: colors.primary,
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: 'rgba(26, 60, 64, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: colors.primary,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.secondary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.accent,
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: colors.secondary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    body1: {
      fontSize: '1.1rem',
      color: '#ffffff',
    },
    body2: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    button: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1.1rem',
        },
        contained: {
          backgroundColor: colors.secondary,
          '&:hover': {
            backgroundColor: colors.secondary,
            opacity: 0.9,
          },
        },
        outlined: {
          borderColor: colors.secondary,
          color: colors.secondary,
          '&:hover': {
            borderColor: colors.secondary,
            backgroundColor: 'rgba(214, 167, 122, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          color: '#ffffff',
        },
      },
    },
  },
}); 