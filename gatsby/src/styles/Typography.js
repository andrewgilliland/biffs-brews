import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/itc-serif-gothic-lt-heavy.ttf';
import sansSerif from '../assets/fonts/ProximaNova-Regular.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: ITCSerifGothic;
    src: url(${font});
  }

  @font-face {
    font-family: ProximaNova;
    src: url(${sansSerif});
  }

  html {
  }

  p, li {
    font-family: var(--font-sans);
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-serif);
    margin: 0;
    text-transform: uppercase;
  }
  a {
    color: var(--pale-yellow);
    text-decoration-color: var(--stain-train-brown);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    color: var(--stain-train-brown);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: .8;
    border-radius: var(--border-radius);
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
