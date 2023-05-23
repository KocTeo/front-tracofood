import { styled } from "styled-components";

export const FilterStyle = styled.div`
  height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  font-size: ${props => props.theme.font.size.xsm};
  color: ${props => props.theme.colors.util};

  div {
    display: flex;
    width: 300px;
    justify-content: space-around;
    align-items: center;
  }

  button {
    width: 148px;
    height: 54px;
  }
`