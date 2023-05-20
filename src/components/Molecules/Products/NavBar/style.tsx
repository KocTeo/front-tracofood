import { styled } from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  width: 100%;

  div {
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;

    width: 100%;
  }
  
  .select {
    background-color: ${props => props.theme.colors.secondary};
  }
`