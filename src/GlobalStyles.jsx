import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

*:not(dialog) {
  margin: 0;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

textarea:not([rows]) {
  min-height: 5em;
}

:target {
  scroll-margin-block: 5ex;
}

#root,
#__next {
  isolation: isolate;
}


html {
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
}

`;

export default GlobalStyles;
