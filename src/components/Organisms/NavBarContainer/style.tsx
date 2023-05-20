import { styled } from "styled-components";

export const NavBarContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
  width: 25%;
  height: 100vh;
`;