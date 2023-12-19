const resetCSS = () => `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  dir,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    padding: 0;
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  dir,
  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::after,
  blockquote::before,
  q::after,
  q::before {
    content: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  video{
    max-width: 100%;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  html, body {
    overflow-x: hidden;
  }
`

export default resetCSS
