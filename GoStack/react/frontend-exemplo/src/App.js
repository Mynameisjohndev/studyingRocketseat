import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Image from "./assets/backgorund.jpg";
import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  async function handleCreateProject() {
    await api
      .post("/projects", {
        title: `Mensagem de ${Date.now()}`,
        owner: "João Antônio",
      })
      .then((response) => {
        setProjects([...projects, response.data]);
      });
  }

  useEffect(() => {
    async function loadProjects() {
      await api.get("/projects").then((res) => {
        console.log(res.data);
        setProjects(res.data);
      });
    }
    loadProjects();
  }, []);

  return (
    <>
      <Header title="Helcome sd2" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleCreateProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
