import styles from 'styled-components'
import globalStyles from '../assets/global-styles'

export const PageWrapper = styles.div`
background-color: ${globalStyles.theme.colors.page_bg_color};
min-height: calc(100% - 4rem);
padding-top: 4rem;
display: grid;

@media (min-width: ${globalStyles.screens.md}){
  padding-top: 0;
  min-height: 100%;
  grid-template-columns: 16rem auto;

  };

`

export const NavWrapper = styles.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  @media (min-width: ${globalStyles.screens.md}){
    display: none;
  };
`
export const SideBarWrapper = styles.div`
  background-color: ${globalStyles.theme.colors.bg_color};
  position: fixed;
  right: -16rem;
  width: 16rem;
  z-index: 99;
  height: calc(100% - 4rem);
  transition: right .25s linear;
  
  &.sidebar-active{
    right: 0;
  };
  
  @media (min-width: ${globalStyles.screens.md}){
    position: static;
    height:100%;
    
  };
`

export const PageContent = styles.div`
  display: block;
  padding: 0 1rem;
  
  background-color: ${globalStyles.theme.colors.page_bg_color};
  @media (min-width: ${globalStyles.screens.md}){
    padding: 0 3rem;
  };
`