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
    
    color: var(--black);
  }
  p, li {
    font-family: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ITCSerifGothic, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    text-transform: uppercase;
  }
  a {
    color: var(--pale-yellow);
    text-decoration-color: var(--blue);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
