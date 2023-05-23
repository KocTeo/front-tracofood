import { styled } from "styled-components";

export const NavBarContainerStyle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 20%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`