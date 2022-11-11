import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/ToastMessage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Navigation />
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
