import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const Item = ({ item: { name, price } }) => {
  return (
    <>
      <StyledCheckboxContainer className="col">
        <input type="checkbox" />
      </StyledCheckboxContainer>
      <StyledArticleName className="px-0 col">{name}</StyledArticleName>
      <StyledPrice className="col">{price}€</StyledPrice>
      <a href="delete-article" className="col">
        <FaTimes className="icon" />
      </a>
    </>
  );
};

export default Item;
