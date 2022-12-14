import { createGlobalStyle } from "styled-components";
import globalStyles from "./assets/global-styles";
export const GlobalStyle = createGlobalStyle`

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	/* applying fonts */
	input, textarea, button {font-family: inherit}


	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1.5;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    font-style: normal;
	}
	html, body, #root{
		height: 100%;
		width: 100%;
		background: #f2f3f4;
	}

	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: #fff;
	}
	
	/* global variables */
	:root{
		--text-sm: 16px; 
		--text-lg: 24px;
		--text-xs: 14px;
		--text-md: 20px;

		--offwhite: ${globalStyles.theme.colors.offwhite};
		--deep-blue: ${globalStyles.theme.colors.bg_color};
		--light-blue: ${globalStyles.theme.colors.light_bg_color};
		--app-bg: ${globalStyles.theme.colors.page_bg_color};
		--orange: ${globalStyles.theme.colors.orange};
		
		--screen-sm: ${globalStyles.screens.sm};
		--screen-md: ${globalStyles.screens.md};
		--screen-lg: ${globalStyles.screens.lg}
	};


	/* set elements basic styles */
	
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

	
	
	`;
