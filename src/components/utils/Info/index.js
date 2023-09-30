import { InfoStyle, InfoTextStyle } from './style';

export default function Info({ text, IconComponent }) {
  return (
    <InfoStyle>
      <IconComponent />
      <InfoTextStyle>{text}</InfoTextStyle>
    </InfoStyle>
  );
}
