import styled from "styled-components";

export const fontsLoadedConfig = {
  'Jano-Regular': require('../../assets/fonts/Jano-Sans-Pro-Regular.otf'),
  'Jano-SemiBold': require('../../assets/fonts/Jano-Sans-Pro-SemiBold.otf'),
  'Jano-Bold': require('../../assets/fonts/Jano-Sans-Pro-Bold.otf'),
  'Jano-Medium': require('../../assets/fonts/Jano-Sans-Pro-Medium.otf'),
  'Jano-Light': require('../../assets/fonts/Jano-Sans-Pro-Light.otf'),
  'Jano-Thin': require('../../assets/fonts/Jano-Sans-Pro-Thin.otf'),
};

export const imagesConfig = {
  Estaplit: require('../../assets/estaplit-logo.png'),
  EstaplitBlue: require('../../assets/estaplit-icon-blue.png'),
  EstaplitSpot: require('../../assets/estaplit-spot-icon.png'),
  LinearBackground: require('../../assets/background.png'),
  Calendar: require('../../assets/calendar.png'),
};

export const fontConfig = {
  Regular: 'Jano-Regular',
  SemiBold: 'Jano-SemiBold',
  Light: 'Jano-Light',
  Thin: 'Jano-Thin',
  Medium: 'Jano-Medium',
  Bold: 'Jano-Bold',
};

export const spacing = {
  half: '4px',
  base: '8px',
  default: '12px',
  medium: '14px',
  large: '16px',
  largeS: '22px',
  subtitle: '24px',
  title: '26px',
  largeS2: '32px',
};

export const colors = {
  primary: {
    100: '#E8EFFF',
    200: '#D1DEFD',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#0519D0',
    600: '#09189E',
  },
  gray: {
    100: '#FEFEFE',
    200: '#FCFCFD',
    300: '#EAECF0',
    400: '#DEE1E6',
    500: '#98A2B3',
    600: '#667085',
    800: '#1D2939',
    1000: '#000000',
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
    600: '#027A48',
  },
  alert: {
    100: '#FEF4EB',
    200: '#F9D3B0',
    500: '#E57207',
    600: '#B95900',
  },
};

export const headerStyleConfig = {
  BackgroundColor: colors.gray[100],
};

export const titleConfig = {
  fontFamily: fontConfig.SemiBold,
  FontSize: spacing.large,
  Color: colors.gray[800],
  FontWeight: 500,
};

export const buttonConfig = {
  Utils: {
    fontFamily: 'Jano-SemiBold',
  },
  Default: {
    Primary: {
      Default: {
        Width: '100%',
        Height: '56px',
        BackgroundColor: colors.primary[500],
        Radius: '12px',
        Padding: '16px 20px',
        Color: colors.gray[100],
        IconSize: 18,
        LineHeight: spacing.largeS,
        JustifyContent: 'center',
        FontWeight: 600,
        FontSize: spacing.large,
      },
      White: {
        Width: '100%',
        Height: '56px',
        BackgroundColor: colors.gray[100],
        Radius: '12px',
        Padding: '16px 20px',
        Color: colors.primary[500],
        IconSize: 18,
        LineHeight: spacing.largeS,
        JustifyContent: 'center',
        FontWeight: 600,
        FontSize: spacing.large,
      },
      Transparent: {
        Width: '100%',
        BackgroundColor: colors.gray[100],
        Border: `1px solid ${colors.gray[300]}`,
        Radius: '8px',
        Padding: '16px 20px',
        Color: colors.gray[600],
        IconSize: 14,
        LineHeight: spacing.largeS,
        FontWeight: 600,
        FontSize: spacing.large,
      },
      Small: {
        Width: '100%',
        Height: '34px',
        BackgroundColor: colors.primary[600],
        Radius: '8px',
        Padding: '16px 24px 16px 24px',
        Color: colors.gray[100],
        IconSize: 12,
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
        Color: colors.gray[100],
      },
      Small: {
        Width: '100%',
        Height: '48px',
        BackgroundColor: colors.primary[600],
        Radius: '8px',
        Padding: '16px 24px 16px 24px',
        Color: colors.primary[100],
      },
    },
  },
};

export const badgedConfig = {
  Utils: {
    fontFamily: 'Jano-SemiBold',
    Radius: '32px',
  },
  Default: {
    BackgroundColor: colors.primary[100],
    Color: colors.primary[500],
    Padding: '7px 14px',
    FontSize: spacing.large,
  },
  Disabled: {
    BackgroundColor: colors.gray[300],
    Color: colors.gray[500],
    Padding: '2px 8px',
    FontSize: spacing.default,
  },
  Success: {
    BackgroundColor: colors.success[100],
    Color: colors.success[600],
    Padding: '2px 8px',
    FontSize: spacing.default,
  },
};

export const parkingCardConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold',
    },
    BorderRadius: spacing.default,
    BorderBottomColor: colors.gray[300],
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Title: spacing.large,
    },
    TextColor: colors.gray[600],
    IconSize: 16,
    IconColor: colors.gray[600],
  },
  Default: {
    TitleColor: colors.gray[800],
  },
  Disabled: {
    TitleColor: colors.gray[600],
  },
};

export const dateToggleConfig = {
  Utils: {
    mainTextFont: 'Jano-Bold',
    mainTextFontSize: '14px',
    headerTextFont: 'Jano-Regular',
    headerTextFontSize: '12px',
    borderRadius: '12px',
    border: `1px solid ${colors.gray[300]}`,
    padding: '16px',
    maxWidth: '100px',
  },
  Default: {
    backgroundColor: colors.gray[100],
    color: colors.gray[600],
  },
  Ontouch: {
    backgroundColor: colors.primary[100],
    color: colors.primary[500],
  },
};

export const filterCardConfig = {
  Utils: {
    mainTextFont: 'Jano-Bold',
    mainTextFontSize: '14px',
    headerTextFont: 'Jano-Regular',
    headerTextFontSize: '12px',
    borderRadius: '12px',
    border: `1px solid ${colors.gray[300]}`,
    padding: '14px 16px 14px 16px',
  },
  Default: {
    backgroundColor: colors.gray[100],
    color: colors.gray[600],
  },
  Ontouch: {
    backgroundColor: colors.primary[100],
    color: colors.primary[500],
  },
};

export const ticketCardConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold',
    },
    padding: spacing.large,
    BorderRadius: spacing.default,
    BorderColor: colors.gray[300],
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Large: spacing.large,
    },
    IconSize: 15,
    TextColor: colors.gray[600],
    FontWeight: 400,
    IconColor: colors.gray[600],
    TitleColor: colors.gray[800],
    Button: {
      BackgroundColor: colors.gray[100],
      BorderColor: colors.gray[300],
      FontWeight: 600,
    },
  },
};

export const parkingCloseByCardConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold',
    },
    padding: spacing.large,
    BorderRadius: spacing.default,
    BorderColor: colors.gray[300],
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Large: spacing.large,
    },
    IconSize: 15,
    TextColor: colors.gray[600],
    FontWeight: 400,
    IconColor: colors.gray[600],
    TitleColor: colors.gray[800],
    Button: {
      BackgroundColor: colors.gray[100],
      BorderColor: colors.gray[300],
      FontWeight: 600,
    },
  },
};

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
  },
};

export const HomeScreenConfig = {
  Utils: {
    fontFamily: 'Jano-Regular',
    padding: spacing.large,
  },
  Title: {
    fontSize: spacing.large,
    lineHeight: '22px',
    fontWeight: 400,
    fontFamily: fontConfig.Regular,
  },
  Search: {
    paddingTop: spacing.largeS2,
    paddingBottom: spacing.subtitle,
  },
  Ticket: {
    fontFamily: 'Jano-SemiBold',
    fontWeight: 600,
    fontSize: spacing.medium,
    lineHeight: spacing.largeS2,
    color: colors.gray[600],
  },
};

export const ParkingListScreenConfig = {
  Utils: {
    fontFamily: 'Jano-Regular',
    padding: '16px',
    fontWeight: 400,
    color: colors.gray[500],
  },
  Title: {
    fontSize: spacing.title,
    lineHeight: spacing.largeS2,
  },
  Text: {
    fontSize: spacing.default,
  },
};

export const AutoCompleteConfig = {
  Utils: {
    fontFamily: 'Jano-Regular',
    fontWeight: 400,
    color: colors.gray[800],
  },
  Placeholder: {
    fontSize: 20,
    lineHeight: 24,
  },
  Text: {
    color: colors.gray[800],
    fontSize: 16,
    lineHeight: 22,
  },
  Icon: {
    color: colors.gray[600],
    size: 21,
    selectedColor: colors.primary[500],
  },
  RowIcon: {
    color: colors.gray[600],
    size: 18,
  },
};

export const parkingDetailConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold',
      Bold: 'Jano-Bold',
      Medium: 'Jano-Medium',
    },
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Large: spacing.large,
      Title: spacing.title,
      BigTitle: spacing.largeS2,
    },
    TextColor: colors.gray[600],
    IconSize: 18,
    IconColor: colors.gray[600],
    borderColor: colors.gray[400],
    borderWidth: '1px',
  },
};

export const successScreenConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
    },
    FontSize: '20px',
    TextColor: colors.gray[100],
    IconSize: 18,
  },
  ReservationCard: {
    BackgroundColor: colors.primary[600],
    BorderRadius: spacing.default
  }
}

export const ContainerConfig = {
  Utils: {
    fontFamily: {
      Regular: 'Jano-Regular',
      SemiBold: 'Jano-SemiBold',
    },
    BorderRadius: spacing.default,
    BorderBottomColor: colors.gray[300],
    FontSize: {
      Default: spacing.default,
      Medium: spacing.medium,
      Title: spacing.large,
    },
    TextColor: colors.gray[600],
    IconSize: 16,
    IconColor: colors.gray[600],
  },
  Default: {
    TitleColor: colors.gray[800],
  },
  Disabled: {
    TitleColor: colors.gray[600],
  },
};

export const SectionTitle = styled.Text`
  font-family: ${parkingDetailConfig.Utils.fontFamily.Medium};
  font-size: ${parkingDetailConfig.Utils.FontSize.Medium};
  color: ${colors.gray[800]};
`

export const SectionSubtitle = styled.Text`
  font-family: ${parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: ${parkingDetailConfig.Utils.FontSize.Medium};
  color: ${colors.gray[600]};
`;

export const Section = styled.View`
  background-color:  ${colors.gray[100]};
  padding: 16px;
`;