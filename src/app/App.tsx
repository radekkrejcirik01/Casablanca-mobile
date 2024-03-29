import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from '@store/index';
import { Navigation } from '@navigation/index';
import { PreloadService } from '@utils/general/PreloadService';
import { BAR_STYLE } from './App.const';

const App = () => {
    PreloadService.init().catch();

    return (
        <SafeAreaProvider>
            <StatusBar animated barStyle={BAR_STYLE} />
            <FlashMessage position="top" />
            <Provider store={store}>
                <Navigation />
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
