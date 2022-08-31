import styles from './NewProject.module.css'
import ProjectForm from '../Projects/ProjectForm';

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviço</p>
            <ProjectForm btntext="Cria Projeto"/>
        </div>
    )
}
export default NewProject;