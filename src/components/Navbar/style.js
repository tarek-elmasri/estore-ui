import styles from 'styled-components'
import global_styles from '../../assets/global-styles'


export const NavbarContainer = styles.div`
  background-color: ${global_styles.theme.colors.bg_color};
  color: ${global_styles.theme.colors.offwhite};
  box-shadow: 0px 1px 10px #999;

  .nav{
    display: flex;
    height: 4rem;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    img{
      &.user{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      };
  
      &.user:hover{
        cursor: pointer;
      };
  
      &.logo{
        height: 2rem;
      };
    };
    
    i:hover{
      color: white;
      cursor: pointer;
    };

  };

`

export const UserMenu = styles.div`
  display: block;
  background-color: inherit;
  box-shadow: 0px 1px 10px #999;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: all .25s linear;


  &.user-menu-active{
    max-height: 12rem;
  };

  .nav-tab{
    display: flex;
    justify-content: start;
    align-items: center;
    height: 2rem;
    color: ${global_styles.theme.colors.offwhite};
    padding: 0.5rem 2rem;
    font-size: 1rem;


    span{
      margin-right: 1rem;
    };

    
    
  };

  .nav-tab:hover, .nav-active {
    background-color: ${global_styles.theme.colors.light_bg_color};
    color: white;
  };
  
`