import styles from 'styled-components'
import globalStyles from '../../assets/global-styles'

export const Wrapper = styles.div`
  --text-sm: 16px; 
  --text-lg: 24px;
  --text-xs: 14px;
  --text-md: 20px;
  --offwhite: ${globalStyles.theme.colors.offwhite};
  --deep-blue: ${globalStyles.theme.colors.bg_color};
  --light-blue: ${globalStyles.theme.colors.light_bg_color};

  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: white;

  h1{
    font-weight: bold;
    font-size: var(--text-lg);
  };

  strong{
    font-weight: bold;
  };

  small{
    font-size: var(--text-xs)
  };

  span{
    font-size: var(--text-sm)
  };

  @media (min-width: ${globalStyles.screens.md}){
    max-width: 27rem;
  };
`

export const Header = styles.div`
  h1{
    font-weight: bold;
    font-size: var(--text-md);
    strong{
      font-size: var(--text-lg);
    };
  }

  p{
    font-size: var(--text-sm);
    opacity: 0.5;
  };
`

export const InfoBlock = styles.div`
  margin-top: 1rem;

  div{
    margin-top: 1rem;
    &:last-of-type{
      text-align: end;
      .forget-password-link{
        color: blue;
        font-weight: bold;
        text-decoration: underline;
      };
    };
  };
`

export const SubmitSection = styles.div`
  margin-top: 3rem;

  .submit-btn{
    display: flex;
    width: 100%;
    height: 3rem;
    border-radius: 25px;
    background-color: var(--deep-blue);
    color: var(--offwhite);

    
    &:disabled{
      background-color: gray;      
    };
    
    &:hover:enabled{
      background-color: var(--light-blue);
      color: white;
      cursor: pointer;
  
    };

    &:focus{
      outline: var(--light-blue) solid 2px;
    };
    span{
      margin: auto;
    };
  };

  .signup{
    display: flex;
    padding-right: 1rem;

  };
  
  .signup-link{
    color: blue;
    text-decoration: underline;
    font-weight: bold;
  };
`