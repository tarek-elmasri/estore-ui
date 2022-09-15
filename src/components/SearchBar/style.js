import styles from 'styled-components'
import globalStyles from '../../assets/global-styles'


export const Container = styles.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  font-size: 0.9rem;

  .scale-transit-enter, .scale-transit-appear{
    transform: scaleY(0);
    transform-origin: top;
  };

  .scale-transit-enter-active, .scale-transit-appear-active{
    transform: scaleY(1);
    transform-origin: top;
    transition: transform 400ms;
  };

  .scale-transit-exit{
    transform-origin: top;
    transform: scaleY(1);
  };

  .scale-transit-exit-active{
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 400ms;
  };

  
  @media (min-width: ${globalStyles.screens.md}){
    height: 3.5rem;
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
    font-size: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    outline: none;  
  }

  .combo{
    flex: none;
    position: relative;
    display: flex;
    align-items: center;
    border-right: ${globalStyles.theme.colors.offwhite} solid 1px;
    height: 100%;
    color: gray;
    cursor: pointer;
    justify-content: space-between;
    padding: 0 .4rem;
    width: 6rem;

    .combo-list{
      background-color: ${globalStyles.theme.colors.offwhite}; 
      position: absolute;
      top: 2.5rem;
      right: 0;
      width: 6rem;
      display: flex;
      flex-direction: column;
      border: ${globalStyles.theme.colors.offwhite} solid 1px;
      border-top: none;

      span{
        background-color: white;
        padding: .5rem .5rem;
        margin-bottom: 1px;
        &:last-of-type{
          margin-bottom: none;
        };
        &:hover, &.active{
          background-color: ${globalStyles.theme.colors.offwhite};
        };
      }
    };

    
  }

  .search-btn{
    background-color: ${globalStyles.theme.colors.bg_color};
    color: ${globalStyles.theme.colors.offwhite};
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
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
      outline: ${globalStyles.theme.colors.bg_color} solid 1px;
    };
  }

  .user-menu{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${globalStyles.theme.colors.offwhite};
    top: 2rem;
    left: 2rem;
    width: 10rem;
    outline: ${globalStyles.theme.colors.offwhite} solid 2px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 1px #999;
    
    
    .user-menu-item{
      padding: 0 1rem;
      margin-bottom: 1px;
      background-color: white;
      font-size: .8rem;
      color: black;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: start;
      &:last-of-type{
        margin-bottom: 0;
        color: red;
      };

      i{
        margin-left: .5rem;
      };

      &:hover{
        background-color: ${globalStyles.theme.colors.offwhite}
      };
    };
  };


  

  @media (min-width: ${globalStyles.screens.md}){
    display: flex;
  };

`