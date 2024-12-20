import React from 'react';
import './App.css';
import CalculateRef from './conponent/CalculateRef';
import CounterRef from './conponent/CounterRef';

function App(props) {
    return (
        <div className='App'>
            <CalculateRef/>
            <CounterRef/>
        </div>
    );
}

export default App;