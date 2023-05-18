import styled from 'styled-components'

export const InputStyle = styled.input`
  font-size: ${props => props.theme.font.size.xsm};
  width: ${props => props.width ? props.width : '24rem'};
  height: ${props => props.height ? props.height : '2.4rem'};
  padding: 2rem;

  border-color: rgba(78,78,78,0.2);
  border-radius: ${props => props.theme.radius.litle};
`;