import styles from './Home.module.css'

import savings from '../img/savings.svg'
import { Link } from 'react-router-dom';


function Home(){
    return(
    <section className={styles.home_container}>
        <h1>Bem vindo ao <span>Costs</span></h1>
        <p>Começe a gerenciar seus Projetos agora mesmo</p>
        <Link to="/newproject">
            <button>Criar Projetos</button>
        </Link>
        <img src={savings} alt="Costs"/>
    </section>
    )
}
export default Home;