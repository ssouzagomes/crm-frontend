import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  body {
    color: #000;
    background: #fff;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid transparent;
  }

  /* WIDTH PERCENT - START */
  .w-0    { width: 0%; }
  .w-5    { width: 5%; }
  .w-10   { width: 10%; }
  .w-15   { width: 15%; }
  .w-20   { width: 20%; }
  .w-25   { width: 25%; }
  .w-30   { width: 30%; }
  .w-35   { width: 35%; }
  .w-40   { width: 40%; }
  .w-45   { width: 45%; }
  .w-48   { width: 48%; }
  .w-50   { width: 50%; }
  .w-55   { width: 55%; }
  .w-60   { width: 60%; }
  .w-65   { width: 65%; }
  .w-70   { width: 70%; }
  .w-75   { width: 75%; }
  .w-80   { width: 80%; }
  .w-85   { width: 85%; }
  .w-90   { width: 90%; }
  .w-95   { width: 95%; }
  .w-100 { width: 100%; }
  /* WIDTH PERCENT - END */

  /* HEIGHT PERCENT - START */
  .h-0    { height: 0%; }
  .h-5    { height: 5%; }
  .h-10   { height: 10%; }
  .h-15   { height: 15%; }
  .h-20   { height: 20%; }
  .h-25   { height: 25%; }
  .h-30   { height: 30%; }
  .h-35   { height: 35%; }
  .h-40   { height: 40%; }
  .h-45   { height: 45%; }
  .h-50   { height: 50%; }
  .h-55   { height: 55%; }
  .h-60   { height: 60%; }
  .h-65   { height: 65%; }
  .h-70   { height: 70%; }
  .h-75   { height: 75%; }
  .h-80   { height: 80%; }
  .h-85   { height: 85%; }
  .h-90   { height: 90%; }
  .h-95   { height: 95%; }
  .h-100 { height: 100%; }
  /* HEIGHT PERCENT - END */
`

export default GlobalStyle
