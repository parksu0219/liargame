import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e5e5e5;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  ul,ol,menu { 
    padding: 0;
    list-style: none; 
  }
  a { 
    display: inline; 
    text-decoration: none; 
    color: inherit; 
    cursor: pointer; 
  } 
  a:active,a:hover { 
    outline: 0; 
  }
  /* Accordionstyle custom */
  .MuiAccordionDetails-root{
    display: inline-block!important;
    padding: 20px!important;
  }
  .MuiAccordionSummary-root{
    padding: 3px 15px!important;
  }
`;

export default GlobalStyle;
