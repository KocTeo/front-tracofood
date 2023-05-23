import { styled } from "styled-components";

export const ProductCardStyle = styled.div`
  height: 128px;
  width: 80%;

  border: 1px solid ${props => props.theme.colors.disable};
  border-radius: ${props => props.theme.radius.litle};

  display: flex;
  justify-content: space-between;

  .img_description {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 50%;

    h3 {
      font-size: 24px;
      color: ${props => props.theme.colors.util};
    }
   
    span {
      font-size: 15px;
      color: ${props => props.theme.colors.disable};
    }
  }

  .price_edit {
    width: 20%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    span {
      font-weight: ${props => props.theme.font.weight.bold};
      font-size: 22px;
      color: ${props => props.theme.colors.util};
    }

    button {
    width: 148px;
    height: 54px;
  }
  }
`;