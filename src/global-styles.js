const globalStyles = `
  :root {
    --dark-blue: #2B2D42;
    --light-blue: #8D99AE;
    --off-white: #EDF2F4;
    --red: #EF233C;
    --dark-red: #D90429;
  }

  html {
    background-color: var(--dark-blue);
    color: var(--off-white);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: .75rem;
  }

  a {
    background-color: var(--red);
    color: var(--off-white);

    border-radius: .15rem;
    padding: 0 .15rem;

    &:hover {
      background-color: var(--dark-red);
    }
  }
`;

export default globalStyles;