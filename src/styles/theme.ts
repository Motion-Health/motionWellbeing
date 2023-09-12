import { createTheme, ThemeOptions } from '@mui/material/styles';
declare module "@mui/material/styles" {
  interface TypographyVariants {
    helper: React.CSSProperties
    navigation: React.CSSProperties
    label: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    helper?: React.CSSProperties
    navigation?: React.CSSProperties
    label?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    helper: true
    navigation: true
    label: true
  }
}


export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#0f5298',
      light: '#2565ae',
      dark: '#0c437d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#66d3fa',
      light: '#d5f3fe',
      dark: '#3c99dc',
      contrastText: 'rgba(0,0,0,0.9)',
    },
    text: {
      primary: '#0c437d',
    },
    info: {
      main: '#8ce0ff',
      light: 'rgba(140,224,255,0.5)',
      dark: '#346374',
      contrastText: '#0c437d',
    },
    error: {
      main: '#ff8c8c',
      light: 'rgba(255,140,140,0.5)',
      dark: '#832e2e',
      contrastText: '#0c437d',
    },
    warning: {
      main: '#f8cf53',
      light: 'rgba(248,207,83,0.5)',
      dark: '#675F0F',
      contrastText: '#0c437d',
    },
    success: {
      main: '#70dc81',
      light: 'rgba(112,220,129,0.5)',
      dark: '#37603E',
      contrastText: '#0c437d',
    },
    faces: {
      red: '#f55e53',
      orange: '#ffb74d',
      yellow: '#f8cf53',
      green: '#6fb071',
      darkGreen: '#9dc371',
    },
    divider: 'rgba(0,0,0,0.3)',
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '2.75rem',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0em',
      marginBottom: '1.5rem',
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0em',
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    body1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    body2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    button: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    helper: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: '0em',
    },
    navigation: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    label: {
      color: 'red',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
          fontSize: '1rem',
          fontWeight: 600,
          lineHeight: 1.5,
          letterSpacing: '0em',
          color: '#0c437d',
          top: '-8px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#0c437d',
          fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
          fontSize: '.75rem',
          lineHeight: 1,
          letterSpacing: '0em',
          marginLeft: 0
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          paddingLeft: '10px',
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          color: '#0f5298',
          border: `1px solid #DDDDDD`,
          borderRadius: '4px',
          height: '3rem',
          '&:hover': {
            borderColor: `#ACACAC`,
          },
          '&:focus-within': {
            borderColor: `#0C437D`,
          },
        },
        multiline: {
          height: 'auto'
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: `none`,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          position: 'absolute',
        },
        standardError: {
          backgroundColor: '#ff8c8c80',
          color: '#832E2E',
        },
        standardWarning: {
          backgroundColor: '#F8CF5380',
          color: '#675F0F',
        },
        standardSuccess: {
          backgroundColor: '#70DC8180',
          color: '#37603E',
        },
        standardInfo: {
          backgroundColor: '#8CE0FF80',
          color: '#0C437D'
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          padding: '0.75rem 1rem',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: '62rem'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#D5F3FE',
          height: 'auto'
        }, 
        label: {
          fontSize: '0.5rem'
        }, 
        labelMedium: {
          fontSize: '1rem'
        }
      }
    }
  },
};

const theme = createTheme(themeOptions);

export default theme;
