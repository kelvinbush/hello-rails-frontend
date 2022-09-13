import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store/configure-store';

import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
