import styles from "styled-components";

export const Wrapper = styles.div`
  margin: .5rem; //to be deleted
  border: var(--offwhite) solid 1px;
  max-width: 32rem;
  font-size: 14px;
  
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
  
  .icon-btn{
    background-color: var(--offwhite);
    text-align: center;
    padding: 0 0.5rem;
    margin-right: .25rem;
    cursor: pointer;
    border: var(--light-blue) solid 1px;
    border-radius: 5px;
  };

  .btn{
    background-color: var(--offwhite);
    height: 2.5rem;
    width: 100%;
    text-align: center;
    border: var(--deep-blue) solid 1px;
    border-radius: 5px;
    cursor: pointer;

  };
`;
