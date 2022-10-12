import React from 'react';
import styled from 'styled-components'
import { Header } from './components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 152px 1fr;
`

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;
