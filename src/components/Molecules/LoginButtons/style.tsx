import styled from 'styled-components';

export const LoginButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 40%;
  width: 100%;

  span {
    color: ${props => props.theme.colors.disable};
    font-weight: ${props => props.theme.font.weight.bold};
  }
`;