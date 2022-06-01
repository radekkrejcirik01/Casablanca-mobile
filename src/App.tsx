import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './store';
import { Navigation } from './navigation';

const App = () => (
    <SafeAreaProvider>
        <Provider store={store}>
            <Navigation />
        </Provider>
    </SafeAreaProvider>
);

export default App;
