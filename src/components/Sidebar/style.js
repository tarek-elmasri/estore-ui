import styles from 'styled-components'
import globalStyles from '../../assets/global-styles'

export const Container = styles.div`
color: ${globalStyles.theme.colors.offwhite};
padding-top: 1rem;
height: 100%;
width: 100%;
overflow: auto;
z-index: 999;

.nav-tab{
  padding: .5rem 1rem;;
  display: flex;
  font-size: 1rem;
  
  span{
    margin-right: 1rem;
  };

};

.nav-tab:hover, .nav-tab-active{
  background-color: ${globalStyles.theme.colors.light_bg_color};
  color: white;
};

@media (min-width: ${globalStyles.screens.md}){
  overflow: hidden;
};
`

export const Top = styles.div`
  display: none;
  margin-bottom: 1rem;
  
  @media (min-width: ${globalStyles.screens.md}){
    display: block;
    height: 2.5rem;
    width: 100%;
    border-bottom: ${globalStyles.theme.colors.light_bg_color} solid 1px;

    img{
      display: block;
      width: 2rem;
      margin: auto;
    };
    
  };
`

export const StoreLogo = styles.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 4rem;
    width: 3.5rem;
    border-radius: 15px;
  };

  div{
    margin-right: 1rem;
    font-size: 1rem;
  };

  .share-btn{
    margin-top: .25rem;
    padding: 1px .5rem;
    width: 6rem;
    border: ${globalStyles.theme.colors.light_bg_color} solid 2px;
    border-radius: 20px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content:space-between;

    &:hover{
      background-color: ${globalStyles.theme.colors.light_bg_color}
    };
  };

`
