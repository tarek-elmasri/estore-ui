import styles, { css } from 'styled-components'
import globalStyles from '../../assets/global-styles'

export const Container = styles.div`
color: var(--offwhite);
padding-top: 1rem;
height: 100%;
width: 100%;
overflow: ${({ overFlow }) => overFlow ? css`auto` : css`hidden`};
z-index: 999;

.nav-tab{
  padding: .5rem 1rem;;
  display: flex;
  align-items: center;
  font-size: 1rem;
  
  span{
    margin-right: 1rem;
  };

};

.nav-tab:hover, .nav-tab-active{
  background-color: var(--light-blue);
  color: white;
};

`

export const Top = styles.div`

  display: none;
  margin-bottom: 1rem;
  
  height: 2.5rem;
  width: 100%;
  border-bottom: var(--light-blue) solid 1px;

  img{
    display: block;
    width: 2rem;
    margin: auto;
  };

  @media (min-width: ${globalStyles.screens.md}){
    display: block;
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
    span,i{
      font-size: 0.75rem;
    };
    margin-top: .25rem;
    padding: 1px .5rem;
    width: 6rem;
    border: var(--light-blue) solid 2px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;

    &:hover{
      background-color: var(--light-blue);
    };
  };

`
