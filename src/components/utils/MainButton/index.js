import Ionicons from '@expo/vector-icons/Ionicons';
import { MainButtonStyle, MainButtonTextStyle } from './style';
import { buttonConfig } from '../../../constants';

export default function MainButton({
  text,
  iconName,
  styleName,
  callback,
  ...props
}) {
  const styles = {
    default: buttonConfig.Default.Primary.Default,
    transparent: buttonConfig.Default.Primary.Transparent,
  };

  const buttonStyle = styles[styleName];

  return (
    <MainButtonStyle
      {...props}
      backgroundColor={buttonStyle.BackgroundColor}
      border={buttonStyle.Border}
      padding={buttonStyle.Padding}
      onPress={callback}
    >
      <MainButtonTextStyle
        textColor={buttonStyle.Color}
        lineHeight={buttonStyle.LineHeight}
        fontSize={buttonStyle.FontSize}
        fontWeight={buttonStyle.FontWeight}
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
