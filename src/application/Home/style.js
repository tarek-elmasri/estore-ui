import styles from "styled-components";
import globalStyles from "../../assets/global-styles";

export const Wrapper = styles.div`
  --text-sm: 16px; 
  --text-lg: 24px;
  --text-xs: 14px;
  --text-md: 20px;
  --offwhite: ${globalStyles.theme.colors.offwhite};
  --deep-blue: ${globalStyles.theme.colors.bg_color};
  --light-blue: ${globalStyles.theme.colors.light_bg_color};

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


  display: flex;
  align-items: center;

`;

export const StaffActionsBlock = styles.div`
  flex-grow: 1;
  
  .staff-actions__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: var(--offwhite) solid 1px;
    padding: 1rem;
    
    i{
      margin-left: 0.25rem;
    };
    
    .header-title{
      display: flex;
      align-items: center;
    };

    .header-filter-btn{
      display: flex;
      align-items: center;
      cursor: pointer; 
    };
  };

  .staff-actions__body{
    border var(--offwhite) solid 1px;
    padding: 1rem;
    margin-top: 1rem;
    
    .action-block{
      display: flex;
      flex-direction: column;
      align-items:start;
      justify-content: center;

      div{
        display: flex;
        align-items: center;
        margin: .5rem;

        span{
          margin-right: .5rem;
        };

      };
      small{
        opacity: .5;
        margin-right: 3rem;
      };
    };
  };

  @media (min-width: ${globalStyles.screens.sm}){
    .staff-actions__body{
      .action-block{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        small{
          margin-right: 1rem;
        };
      };
    };
  };
  `;

export const AuthorizationsBlock = styles.div`
  
  
  `;
