import styled from "styled-components";
import shoppinList from "../../data/data";
import Item from "../Item/Item";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const List = () => {
  return (
    <>
      <StyledArticles className="list-unstyled col-12">
        {shoppinList.map((item) => (
          <StyledArticle key={item.id} className="row">
            <Item item={item} />
          </StyledArticle>
        ))}
      </StyledArticles>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
