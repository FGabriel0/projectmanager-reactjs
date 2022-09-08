import {useNavigate} from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../Projects/ProjectForm';

function NewProject(){
  const navigate = useNavigate()//Vai permite fazer redirect nas páginas

 function createPost(project){

    //Inicializar o cost ao serviço
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        navigate("/projects", { message: 'Projeto criado com sucesso!' });
      })
  }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviço</p>
            <ProjectForm handleSubmit={createPost} btntext="Cria Projeto"/>
        </div>
    )
}
export default NewProject;