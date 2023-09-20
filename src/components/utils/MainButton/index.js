import { MainButtonStyle, MainButtonTextStyle } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { buttonConfig } from '../../../constants';

export default function MainButton({ text, iconName, styleName }) {
  const styles = {
    default: buttonConfig.Default.Primary.Default,
    transparent: buttonConfig.Default.Primary.Transparent,
  };

  const buttonStyle = styles[styleName];

  return (
    <MainButtonStyle
      backgroundColor={buttonStyle.BackgroundColor}
      border={buttonStyle.Border}
      padding={buttonStyle.Padding}
    >
      <MainButtonTextStyle
        textColor={buttonStyle.Color}
        lineHeight={buttonStyle.LineHeight}
      >
        {text}
      </MainButtonTextStyle>
      <Ionicons
        name={iconName}
        size={buttonStyle.IconSize}
        color={buttonStyle.Color}
      />
    </MainButtonStyle>
  );
}
