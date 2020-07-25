import React, { useState } from 'react';

import Header from './components/Header';

function App () {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-End de E-commerce']);
    
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Home Page" />
            
            <ul>
                {projects.map(project => <li key={project} >{project}</li>)}
            </ul>

            <button type="button" onClick={() => handleAddProject()}>
                Adicionar Projeto
            </button>
        </>
    );
}

export default App;