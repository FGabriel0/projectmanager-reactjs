import styles from './Select.module.css'

function Select({text, name, options , handleOnCharge, value}){
  return(
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>

        <select name={name} id={name}>
            <options>Selecione a Opção</options>
        </select>   
    </div>

  )  
}
export default Select