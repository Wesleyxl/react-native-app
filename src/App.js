import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './components/Welcome';

function App() {

    return (
        <>
            <StatusBar style="dark" />
            <Welcome />
        </>
    );
}

export default App;
