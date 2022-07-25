const reponame = "unform1"

export function RepositorieList(){
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{reponame}</strong>
          <p>Forms in React js</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React js</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React js</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  )
}