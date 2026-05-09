import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

if (root) {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find root element');
}