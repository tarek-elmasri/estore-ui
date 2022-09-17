import styles, { css } from 'styled-components'
import globalStyles from '../assets/global-styles'

export const LayoutWrapper = styles.div`
  min-height: 100%;
  display: grid;
  grid-template-areas: 
      'page'
      'footer';
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;

  @media (min-width: ${globalStyles.screens.md}){
    grid-template-areas:
      'sidebar page'
      'footer footer';
    grid-template-columns: 16rem auto;
    
  };
`

export const NavbarWrapper = styles.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index:1000;

  @media (min-width: ${globalStyles.screens.md}){
    display: none;
  };
`

export const SidebarWrapper = styles.aside`

  display: block;
  background-color: var(--deep-blue);
  width: 16rem;
  position: fixed;
  top: 4rem;
  right: -16rem;
  height: calc(100vh - 5rem);
  z-index: 950;

&.animate{
    right: ${props => props.isFloating ? css`0` : css`-16rem`};
  };

  &.animate-enter{
    right: -16rem;
  };

  &.animate-enter-active{
    right: 0;
    transition: right 400ms linear;
  };

  &.animate-exit{
    right: 0;
  };

  &.animate-exit-active{
    right: -16rem;
    transition: right 400ms linear;
  };

  
  @media (min-width: ${globalStyles.screens.md}){
    &.animate{
      display: inline-grid;
      grid-area: sidebar;
      position: unset;
      height: 100%;
      
    };

  }
`

export const PageContent = styles.div`
  grid-area: page;
  padding-top: 4rem; 
  

  .page-wrapper{
    padding: 1rem 1rem;
    background-color: ${globalStyles.theme.colors.page_bg_color};
  };

  @media (min-width: ${globalStyles.screens.md}){
    padding-top: 0; 

    .page-wrapper{
      padding: 1rem 2rem;
    };
  };
`

export const PageFooter = styles.div`
  grid-area: footer;
`