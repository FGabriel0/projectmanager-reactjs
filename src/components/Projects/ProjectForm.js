import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({btntext}){
    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
                />
           <Input
                type="number"
                text="Orçamento"
                name="bulget"
                placeholder="Insira o orçarmento total "
                />
           <Select
            name="category_id"
            text="Selecione a Categoria"
           />
            <SubmitButton text={btntext}/>
        </form>
    )
}
export default ProjectForm;