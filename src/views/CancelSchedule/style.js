import styled from "styled-components";
import * as Constants from '../../../src/constants/index';

export const CancelScheduleStyle = styled.View`
  padding: 20px;
  height: 100%;
  background-color: ${Constants.colors.gray["100"]};
  justify-content: space-between;
`

export const Title = styled.Text`
  font-family: ${Constants.fontConfig.Medium};
  font-size: ${Constants.spacing.default};
  color: ${Constants.colors.gray["600"]};
`

export const Subtitle = styled.Text`
  font-family: ${Constants.fontConfig.Regular};
  font-size: ${Constants.spacing.large};
  color: ${Constants.colors.gray["800"]};
`

export const BoldSubtitle = styled.Text`
  font-family: ${Constants.fontConfig.SemiBold};
  font-size: ${Constants.spacing.large};
  color: ${Constants.colors.gray["800"]};
`