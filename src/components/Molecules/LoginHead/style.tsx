import styled from 'styled-components'

export const LoginHeadStyle = styled.div`
  height: 20%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: ${props => props.theme.font.size.lg};
    color: ${props => props.theme.colors.util};
  }

  span {
    font-size: ${props => props.theme.font.size.xsm};
    color: ${props => props.theme.colors.disable};
  }
`;