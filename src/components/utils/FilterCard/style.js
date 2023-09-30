import styled from 'styled-components';
import { filterCardConfig } from '../../../constants';

export const FilterCardStyle = styled.View`
  background-color: ${(props) =>
    props.isSelected
      ? filterCardConfig.Ontouch.backgroundColor
      : filterCardConfig.Default.backgroundColor};
  padding: 16px 16px 16px 16px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: ${filterCardConfig.Utils.border};
  height: auto;
  border-radius: ${filterCardConfig.Utils.borderRadius};
`;
