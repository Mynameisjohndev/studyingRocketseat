import { RepositoryItem } from "./RepositoryItem"

const reponame = "unform1"

const unform = {
  name: "Unform",
  description: "Teste",
  link: "https://youtube.com"
}

export function RepositorieList(){
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