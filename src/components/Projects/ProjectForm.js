import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css'

function ProjectForm({btntext}){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])

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
            options={categories}
           />
            <SubmitButton text={btntext} />
        </form>
    )
}
export default ProjectForm;