import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App: React.FC = () => {
    return (
        <h1>Hello world!</h1>
    )
}

ReactDOM.render(<App />,
    document.getElementById('app')
)