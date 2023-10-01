import styled from 'styled-components';
import * as Constants from '../../../../src/constants/index';

export const MapsButtonStyle = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid ${Constants.colors.gray["400"]};
  border-radius: 12px;
  overflow: hidden;
`;

export const ImageBackgroundStyle = styled.ImageBackground`
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const MapsButtonTextStyle = styled.Text`
    font-family: ${Constants.fontConfig.Medium};
    color: ${Constants.colors.gray["600"]};
`;