import { FaPaw } from 'react-icons/fa';
import styles from './Loader.module.css'


function Loader() {


    return(

        <div className={styles.fade}>

            <div className={styles.loader}>

                    <FaPaw/>

            </div>


        </div>


    )
}

export default Loader