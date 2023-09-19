export const fontWeightConfig = { Regular: 'RetniSans-Regular', BoldItalic: 'RetniSans-BoldItalic', Italic: 'RetniSans-Italic', Light: 'RetniSans-Light', LightItalic: 'RetniSans-LightItalic', Medium: 'RetniSans-Medium', MediumItalic: 'RetniSans-MediumItalic', Bold: 'RetniSans-Bold' }
export const fontsLoadedConfig = {'Jano-Regular': require('../../assets/fonts/Jano-Sans-Pro-Regular.otf'), 'Jano-SemiBold': require('../../assets/fonts/Jano-Sans-Pro-SemiBold.otf'), 'Jano-Bold': require('../../assets/fonts/Jano-Sans-Pro-Bold.otf'), 'Jano-Medium': require('../../assets/fonts/Jano-Sans-Pro-Medium.otf'), 'Jano-Light': require('../../assets/fonts/Jano-Sans-Pro-Light.otf'), 'Jano-Thin': require('../../assets/fonts/Jano-Sans-Pro-Thin.otf')}
export const spacing = {
  half: '4px',
  base: '8px',
  default: '12px',
  medium: '14px',
  title: '16px',
}

export const colors = {
  primary: {
    100: '#E8EFFF',
    200: '#D1DEFD',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#0519D0',
    600: '#09189E'
  },
  gray: {
    100: '#FEFEFE',
    200: '#FCFCFD',
    300: '#EAECF0',
    400: '#DEE1E6',
    500: '#98A2B3',
    600: '#667085',
    800: '#1D2939'
  },
  error: {
    100: '#FEF3F2',
    200: '#FECDCA',
    500: '#D92D20',
    600: '#B42318',
  },
  success: {
    100: '#E1F9EB',
    200: '#D1FADF',
    500: '#039855',
    600: '#027A48'
  },
  alert: {
    100: '#FEF4EB',
    200: '#F9D3B0',
    500: '#E57207',
    600: '#B95900'
  }
};

export const headerStyleConfig = {
  BackgroundColor: colors.gray[100]
};


export const buttonConfig = {
  Utils: {
    fontFamily: 'Jano-Bold'
  },
  Default: {
    Primary: {
      Default: {
        Width: '100%',
        Height: '56px',
        BackgroundColor: colors.primary[500],
        Radius: '12px',
        Padding: '17px 24px',
        Color: colors.gray[100]
      },
      Small:
      {
        Width: '100%',
        Height: '34px',
        BackgroundColor: colors.primary[600],
        Radius: '8px',
        Padding: '16px 24px 16px 24px',
        Color: colors.gray[100]
      },
    },
  },
  Ontouch: {
    Primary: {
      Default: {
        Width: '100%',
        Height: '64px',
        BackgroundColor: colors.primary[600],
        Radius: '8px',
        Padding: '16px',
        Color: colors.gray[100]
      },
      Small: {
        Width: '100%',
        Height: '48px',
        BackgroundColor: colors.primary[600],
        Radius: '8px',
        Padding: '16px 24px 16px 24px',
        Color: colors.primary[100]
      }
    },
  }
};

export const badgedConfig = {
  Utils: {
    fontFamily: 'Jano-SemiBold',
    FontSize: spacing.default,
    Radius: '32px',
    Padding: '2px 8px',
  },
  Default: {
    BackgroundColor: colors.primary[100],
    Color: colors.primary[500]
  },
  Disabled: {
    BackgroundColor: colors.gray[300],
    Color: colors.gray[500]
  },
  Success: {
    BackgroundColor: colors.success[100],
    Color: colors.success[600]
  },
};

export const parkingCardConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold'
    },
    BorderRadius: '8px',
    BorderBottomColor: colors.gray[300],
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Title: spacing.title
    },
    TextColor: colors.gray[600],
    IconSize: 14,
    IconColor: colors.gray[600],
  },
  Default: {
    TitleColor: colors.gray[800]
  },
  Disabled: {
    TitleColor: colors.gray[600]
  },
export const headerStyleConfig = { BackgroundColor: '#fff' }
export const dateToggleConfig = {
    Utils: {mainTextFont: 'Jano-Bold', mainTextFontSize: '14px', headerTextFont: 'Jano-Regular', headerTextFontSize: '12px', borderRadius: '12px', border: `1px solid ${colors.gray[300]}`, padding: '12px', maxWidth: '80px'},
    Default: {
        backgroundColor: colors.gray[0],
        color: colors.gray[600],
    },
    Ontouch: {
        backgroundColor: colors.primary[100],
        color: colors.primary[500]
    }
}
export const buttonConfig = { 
    Utils: { fontFamily: 'Jano-Bold' }, 
    Default: 
    { Primary: 
        { Default: 
            { Width: '100%', Height: '56px' , BackgroundColor: colors.primary[600], Radius: '12px', Padding: '17px 24px', Color: colors.gray[0] }, 
          Small: 
            { Width: '100%', Height: '34px' , BackgroundColor: colors.primary[600], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.gray[0] },
        
        },
    },
    Ontouch: 
    {   
        Primary: 
        {
            Default: 
            {
                Width: '100%', Height: '64px' , BackgroundColor: colors.primary[900], Radius: '8px', Padding: '16px', Color: colors.gray[0]
            },
            Small: 
            {
                Width: '100%', Height: '48px' , BackgroundColor: colors.primary[900], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.gray[0]
            }
        },
    }
}
export const paperFontConfig = {
    web: {
        regular: {
            fontFamily: 'Jano-Regular',
            fontWeight: 'normal',
            },
            medium: {
            fontFamily: 'Jano-Medium',
            fontWeight: 'normal',
            },
            light: {
            fontFamily: 'Jano-Light',
            fontWeight: 'normal',
            },
            thin: {
            fontFamily: 'Jano-Thin',
            fontWeight: 'normal',
            },
    },
    ios: {
        regular: {
            fontFamily: 'Jano-Regular',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Jano-Medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Jano-Light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Jano-Thin',
            fontWeight: 'normal',
        },
    },
    android: {
        regular: {
            fontFamily: 'Jano-Regular',
            fontWeight: 'normal',
            },
        medium: {
            fontFamily: 'Jano-Medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Jano-Light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Jano-Thin',
            fontWeight: 'normal',
        },
    }
};
