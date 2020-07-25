import React from 'react';

import Header from './components/Header';

function App () {
    return (
        <>
            <Header title="Home Page">
                <ul>
                    <li>Contato</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                </ul>
            </Header>
            <h1>Hello World</h1>
        </>
    );
}

export default App;