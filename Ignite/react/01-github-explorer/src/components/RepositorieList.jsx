import React, { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"
const reponame = "unform1"

//https://api.github.com/users/Mynameisjohndev/repos

const unform = {
  name: "Unform",
  description: "Teste",
  link: "https://youtube.com"
}

export function RepositorieList(){

  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/Mynameisjohndev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem
          repository={unform}
        />
        <RepositoryItem
          repository={unform}
        />
        <RepositoryItem
          repository={unform}        
        />
        <RepositoryItem
          repository={unform}
        />
      </ul>
    </section>
  )
}