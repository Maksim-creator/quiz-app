import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/ToastMessage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
        <Toast config={toastConfig} />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
