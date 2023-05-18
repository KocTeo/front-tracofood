import styled from 'styled-components'

export const ButtonStyle = styled.button`
  width: 24rem;
  height: 4rem;

  color: white;
  background-color: ${props => props.theme.colors.secondary};

  border: none;
  border-radius: ${props => props.theme.radius.litle};

  font-size: ${props => props.theme.font.size.xsm};
  font-weight: ${props => props.theme.font.weight.bold};

  &:hover {
    background-color: ${props => props.theme.colors.secondary_light};
  }
`;