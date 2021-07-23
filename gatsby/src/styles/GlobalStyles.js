import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --tomato: #e6553b;
    --yellow: #FDE68A;
    --pale-yellow: #f3e5bf;
    --blue: #2563EB;
    --green: #00938e;
    --stain-train-brown: #262422;
    --dark-brown: #211f1e;
    --black: #111827;
    --grey: #efefef;
    --white: #fff;

    --font-serif: ITCSerifGothic, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-sans: ProximaNova, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --container-width: 1024px;

    --border-radius: 2px;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background-color: var(--stain-train-brown);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--tomato);
    color: var(---pale-yellow);
    border: 0;
    padding: 0.25em 1.25em 0.125em;
    border-radius: .25em;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pale-yellow) var(--dark-brown);
  }
  body::-webkit-scrollbar-track {
    background: var(--dark-brown);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--pale-yellow) ;
    border-radius: 6px;
    border: 3px solid var(--dark-brown);
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .pale-yellow {
    color: var(--pale-yellow)
  }

  .stain-train-brown {
    color: var(--stain-train-brown);
  }

  .border-round {
    border-radius: var(--border-radius);
  }

  .margin-top-1 {
    margin-top: 1rem;
  }

  .margin-top-5 {
    margin-top: 5rem;
  }
`;

export default GlobalStyles;
