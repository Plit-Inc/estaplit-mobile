export const headerStyleConfig = { BackgroundColor: '#fff' }
export const fontWeightConfig = { Regular: 'RetniSans-Regular', BoldItalic: 'RetniSans-BoldItalic', Italic: 'RetniSans-Italic', Light: 'RetniSans-Light', LightItalic: 'RetniSans-LightItalic', Medium: 'RetniSans-Medium', MediumItalic: 'RetniSans-MediumItalic', Bold: 'RetniSans-Bold' }
export const fontsLoadedConfig = {'Jano-Regular': require('../../assets/fonts/Jano-Sans-Pro-Regular.otf'), 'Jano-SemiBold': require('../../assets/fonts/Jano-Sans-Pro-SemiBold.otf'), 'Jano-Bold': require('../../assets/fonts/Jano-Sans-Pro-Bold.otf'), 'Jano-Medium': require('../../assets/fonts/Jano-Sans-Pro-Medium.otf'), 'Jano-Light': require('../../assets/fonts/Jano-Sans-Pro-Light.otf'), 'Jano-Thin': require('../../assets/fonts/Jano-Sans-Pro-Thin.otf')}
export const colors = {primary: {600: '#09189E', 500: '#0519D0', 400: '#528BFF', 100: '#E8EFFF'}, gray: {0: '#FFFFFF', 100: '#F2F2F3', 300: '#EAECF0', 400: '#E1E1E4', 600: '#8A8F95', 700: '#686D73', 800: '#19191A'}, support: {Blue: {100: '#E0EDFA', 500: '#1671C5' }, Purple: {100: '#F0E3FC', 500: '#752CBD'}, Green: {100: '#DCF3E5', 500: '#0C663B'}, Red: {100: '#FDEDED', 500: '#C51818'}}}


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

export const hourToggleConfig = {
    Utils: {mainTextFont: 'Jano-Bold', mainTextFontSize: '14px', headerTextFont: 'Jano-Regular', headerTextFontSize: '12px', borderRadius: '12px', border: `1px solid ${colors.gray[300]}`, padding: '15px'},
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
