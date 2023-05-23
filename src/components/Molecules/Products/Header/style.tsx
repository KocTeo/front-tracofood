import { styled } from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 5rem;

  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    border-radius: 50%;
    margin: 15px;
  }
`;