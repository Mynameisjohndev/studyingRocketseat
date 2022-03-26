import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./assets/backgorund.jpg";

function App() {

    const [projects, setProjects] = useState([
        'Desenvolvimento frontEnd',
        'Desenvolvimento mobile'
    ]);

    function handleCreateProject(){
      setProjects([...projects, `Novo projeto ${Date.now()}`]);
      console.log(projects);
    }

  return (
    <>
      <Header title="Helcome sd2" />
      <img width="300" height="300"src={Image}/>
      <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleCreateProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
