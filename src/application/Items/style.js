import styles from 'styled-components'
import globalStyle from '../../assets/global-styles'




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

`

export const ItemCard = styles.div`
  background-color: yellow;
  margin: .5rem; //to be deleted
  padding: .5rem;
  border: var(--offwhite) solid 1px;

  .flex{
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  };
  .textbox{
    flex-grow: 1;
  };

`