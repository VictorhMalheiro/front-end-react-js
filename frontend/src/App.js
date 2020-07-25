import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App () {
    const [projects, setProjects] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputOwner, setInputOwner] = useState('');
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    
    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            // title: inputTitle,
            // owner: inputOwner,
            title: `asd projeto ${Date.now()}`,
            owner: 'Victor Malheiro',
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Home Page" />
            <hr/>
            {/* <input type="text" onChange={() => setInputTitle(inputTitle)} value={inputTitle}/>
            <input type="text" onChange={() => setInputOwner(inputOwner)} value={inputOwner}/> */}
            <ul>
                {projects.map(project => <li key={project.id} >{project.title}</li>)}
            </ul>

            <button type="button" onClick={() => handleAddProject()}>
                Adicionar Projeto
            </button>
        </>
    );
}

export default App;