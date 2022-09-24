import styles from "styled-components";
import globalStyle from "../../assets/global-styles";

export const Wrapper = styles.div`

  .items__header{
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--offwhite) solid 1px;
    padding: 1rem;
    
    i{
      margin-left: 0.25rem;
    };
    
    .header-title{
      display: flex;
      align-items: center;
    };

    .header-filter-btn{
      display: flex;
      align-items: center;
      cursor: pointer; 
    };
  };

  .items__body{
    background-color: white;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: auto;


  
    @media (min-width: ${globalStyle.screens.lg}){
      grid-template-columns: auto auto;
    };

    @media (min-width: ${globalStyle.screens.xl}){
      grid-template-columns: auto auto auto;
    };
  };

`;

export const ItemCard = styles.div`
  margin: .5rem; //to be deleted
  border: var(--offwhite) solid 1px;
  max-width: 32rem;

  .item-card__body{
    padding: 1.5rem;
  };
  img{
    display: flex;
    max-height: 150px;
    margin: auto;
  };
  .flex{
    display: flex;
    align-items: center;
    margin-top: .5rem;
  };
  .textbox{
    flex-grow: 1;
  };
  
  .btn{
    background-color: var(--offwhite);
    text-align: center;
    padding: 0 0.5rem;
    margin-right: .25rem;
    cursor: pointer;
    border: var(--light-blue) solid 1px;
  };
`;
