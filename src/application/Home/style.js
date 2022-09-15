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
  flex-direction: column;
  
`

export const Top = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: var(--offwhite) solid 1px;
  padding: 1rem;
  .ti{
    margin-left: 0.25rem;
  };

  div{
    display: flex;
    align-items: center;
  };

  .filter-btn{
    cursor: pointer;
  };
`

export const DataBlock = styles.div`


`