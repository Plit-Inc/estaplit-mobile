import { InfoStyle, InfoTextStyle } from './style';

export default function Info({ text, textColor, IconComponent }) {
  return (
    <InfoStyle>
      <IconComponent />
      <InfoTextStyle textColor={textColor}>{text}</InfoTextStyle>
    </InfoStyle>
  );
}
