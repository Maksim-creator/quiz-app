import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
