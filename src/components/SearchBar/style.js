import styles from 'styled-components'
import globalStyles from '../../assets/global-styles'


export const Container = styles.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  font-size: 0.8rem;

  
  @media (min-width: ${globalStyles.screens.md}){
    height: 3rem;
    padding: .5rem 2rem;
  };
`

export const SearchBox = styles.div`
  flex: auto;  
  display: flex;
  align-items: center;
  height: 100%;

  border: ${globalStyles.theme.colors.offwhite} solid 1px;
  border-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  input{
    appearance: none;
    border: none;
    border-radius: 0;
    width: 100%;
    height: 90%;
    padding-right: 1rem;
    padding-left: 1rem;
    outline: none;  
  }

  div{
    display: flex;
    align-items: center;
    border-right: ${globalStyles.theme.colors.offwhite} solid 1px;
    cursor: pointer;
    height: 100%;
    color: gray;
    
    &.combo{
      justify-content: space-between;
      flex: none;
      padding: 0 .4rem;
      width: 6rem;
    };
    
    &.search-btn{
      background-color: ${globalStyles.theme.colors.bg_color};
      color: ${globalStyles.theme.colors.offwhite};
      justify-content: center;
      flex: none;
      width: 2.5rem;
      font-size: 1.1rem;
      text-weight: bold;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    
      

      &:hover{
        background-color: ${globalStyles.theme.colors.light_bg_color};
        color: white;    
      };
    };
  }

  @media (min-width: ${globalStyles.screens.md}){
    max-width: 30rem;
  };
`

export const UserControl = styles.div`
  position: relative;
  display: none;
  align-items:center;
  margin-right: 1rem;
  height: 100%;
  
  img{
    border-radius: 50%;
    height: 100%;
    cursor: pointer;
    &:hover{
      outline: ${globalStyles.theme.colors.bg_color} solid 2px;
    };
  }

  @media (min-width: ${globalStyles.screens.md}){
    display: flex;
  };

`