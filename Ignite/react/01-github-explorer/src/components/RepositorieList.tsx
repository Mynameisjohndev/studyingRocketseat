import React, { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositorieList(){

  const [repositories, setRepositories] = useState<Repository []>([]);

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
        {repositories.map((repository, index) => {
          return <RepositoryItem  key={index} repository={repository}/>
        })}
      </ul>
    </section>
  )
}