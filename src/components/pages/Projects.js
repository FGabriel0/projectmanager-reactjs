import Message from "../Layout/Message";
import {useLocation,Link} from 'react-router-dom'

import Container from '../Layout/Container'

import styles from './Projects.module.css'

function Projects(){

    const location = useLocation();
    let message='';
    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Projetos</h1>
            <Link to="/newproject">
                <button>Criar Projetos</button>
            </Link>
            </div>
            {message && 
            <Message type='success' msg={message}/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
           
        </div>
    )
}
export default Projects;