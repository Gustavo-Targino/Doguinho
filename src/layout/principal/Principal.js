import styles from './Principal.module.css'
import { MdWavingHand } from 'react-icons/md'

function Principal() {

return (

    <div className={styles.painel}>

        <h1 className={styles.painel_hello}>Olá! <MdWavingHand/> </h1>
        <h1>Venha explorar imagens do melhor amigo do homem!</h1>

    </div>

)

}

export default Principal