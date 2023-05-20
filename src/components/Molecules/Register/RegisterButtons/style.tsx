import styled from 'styled-components';

export const RegisterButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 20%;
  width: 100%;

  span {
    color: ${props => props.theme.colors.disable};
    font-weight: ${props => props.theme.font.weight.bold};
  }

  a {
    text-decoration: none;

    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.colors.util};
  }
`;