import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from '@store/index';
import { Navigation } from '@navigation/index';
import { BAR_STYLE } from './App.const';

const App = () => (
    <SafeAreaProvider>
        <StatusBar animated barStyle={BAR_STYLE} />
        <Provider store={store}>
            <Navigation />
        </Provider>
    </SafeAreaProvider>
);

export default App;
