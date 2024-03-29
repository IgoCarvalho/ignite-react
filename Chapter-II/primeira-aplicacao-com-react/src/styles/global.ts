import { darken, transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB2;

    --background: #F0F2F5;
    --shape: #FFFFFF;

    --input-background: #e7e9ee;
    --input-border: #D7D7D7;
    --input-border-hover: ${darken(0.1, '#D7D7D7')};

    --radio-box-red: ${transparentize(0.9, '#E52E4D')};
    --radio-box-green: ${transparentize(0.9, '#33CC95')};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;
