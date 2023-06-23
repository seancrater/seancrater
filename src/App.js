import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';

import Wrapper from './components/Wrapper';

import globalStyles from './global-styles';

const Header = styled.header`
  max-width: 36rem;
`;

const SubHeader = styled.section`
  max-width: 36rem;
`;

const IconBank = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Wrapper>
        <Header>
          <h1>Sean Crater</h1>
          <h2>Frontend Engineering Leader</h2>
        </Header>
        <SubHeader>
          <p>Hey there! I&apos;m Sean, a well versed frontend engineer with experience successfully leading (and contributing to!) teams in a variety of technology stacks.
            Most recently, I managed an analytics team of 8 engineers at <a href="https://www.pendo.io/" rel="noreferrer" target="_blank">Pendo</a>.</p>
        </SubHeader>
      </Wrapper>
    </Fragment>
  );
}

export default App;