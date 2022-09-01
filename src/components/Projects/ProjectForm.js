import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btntext, projectData}){

    //Colocando o banco de Dados via json
    const [categories, setCategories] = useState([]);
    const[project, setProject]= useState(projectData || {}); //Vai receber do formulario

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
          

          .catch((err) => console.log(err))
      }, [])

      const submit = (e) =>{
        e.preventdefault()
        handleSubmit(project);
      }

      function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})//vai mudar a propriedade do input
      }
      function handleCategory(e){
        setProject({...project, category: {
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },
    })
       
      }


    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
                handleOnCharge={handleChange}
                value={project.name ? project.name:''}
                />
           <Input
                type="number"
                text="Orçamento"
                name="bulget"
                placeholder="Insira o orçarmento total "
                handleOnCharge={handleChange}
                value={project.budget}
                />
           <Select
            name="category_id"
            text="Selecione a Categoria"
            options={categories}
            handleOnCharge={handleCategory}
            value={project.category ? project.category.id: ''}
           />
            <SubmitButton text={btntext} />
        </form>
    )
}
export default ProjectForm;