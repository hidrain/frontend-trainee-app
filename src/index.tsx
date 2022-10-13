import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Theme } from './theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: ${props => props.theme.weight.medium};
    color: ${props => props.theme.colors.primary};
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>

);


