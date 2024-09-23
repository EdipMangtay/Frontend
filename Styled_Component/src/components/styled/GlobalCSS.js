import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: ${(props) => props.theme.colors.textColor}; // Temadan yazı rengini alır
        box-sizing: border-box;
    }

    body {
      
        background-color: ${(props) => props.theme.colors.bgcolor}; // Temadan arka plan rengini alır
        /* Alternatif olarak sabit bir renk kullanabilirsiniz */
        /* background-color: orange; */
    }

      .mr-50{
            margin-right: 50px;
      }
      .ml-50{
            margin-left: 50px;
      }
      .mt-50{
            margin-top: 50px;
      }
      .mb-50{
            margin-bottom: 50px;
      }
    
 `;