import Styles from './DefinirNome.module.css'
function Nome({placeholder,ShowNomeVisible,nome}){
    return(
        <div className={Styles.nome}>
        <input autoFocus placeholder={placeholder} onChange={nome}/>
        <button  onClick={ShowNomeVisible}>Confirmar</button>
        </div>
    )
}
export default Nome