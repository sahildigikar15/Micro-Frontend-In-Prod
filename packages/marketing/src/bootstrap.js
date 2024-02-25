import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Mount function to start 
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    )
}

// if we are in dev/isolation call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if(devRoot) {
        mount(devRoot)
    }
}


// running through container we should export the mount

export {mount}