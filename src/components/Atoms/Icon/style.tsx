import { styled } from "styled-components";

export const IconStyle = styled.img`
  width: ${props => props.width ? props.width : '50px'};
  height: ${props => props.height ? props.height : '50px'};
`;