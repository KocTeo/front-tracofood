import { styled } from "styled-components";

export const ProductCardStyle = styled.div`
  height: 128px;
  width: 95%;

  box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.3);

  margin: 3px;

  border: 1px solid ${props => props.theme.colors.disable};
  border-radius: ${props => props.theme.radius.litle};

  display: flex;
  justify-content: space-between;

  .img_description {
    display: flex;
    align-items: center;

    margin-left: 15px;

    width: 80%;

    h3 {
      margin-left: 30px;
      font-size: 20px;
      color: ${props => props.theme.colors.util};
    }
   
    span {
      margin-left: 30px;
      font-size: 14 px;
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