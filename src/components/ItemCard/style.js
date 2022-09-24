import styles from "styled-components";

export const Wrapper = styles.div`
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
