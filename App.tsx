import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/ToastMessage';

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
