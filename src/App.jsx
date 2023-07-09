import React from 'react';
import {setup} from '@twind/core'
import config from '../twind.config';
import Header from './components/Header';
import Footer from './components/Footer';

setup(config)

export const LabContext  = React.createContext({})

function App() {    
    return (
        <div>
            <LabContext.Provider value={{name: 'Biophotonics Imaging Technology Lab (BIT)'}}>
                <Header />
                <Footer />
            </LabContext.Provider>
        </div>
    );
}

export default App;

