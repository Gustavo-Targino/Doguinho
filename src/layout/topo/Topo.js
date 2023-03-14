import styles from './Topo.module.css'
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Topo () {

    return(

        <header className={styles.header}>

            <Link to='/' className={styles.link}> <h1 className={styles.header_text}> <FaPaw/>Cachorrinho <FaPaw/></h1>  </Link> 

        <ul className={styles.nav}>
          <li> <h3>  <Link to='/' className={styles.link}> Home </Link> </h3>  </li>
          <li><h3> <Link to='/animal' className={styles.link}> Animal</Link> </h3>  </li>
          <li><h3> <Link to='/lista' className={styles.link}> Lista</Link> </h3>  </li>
        </ul>

      </header>



    )


}

export default Topo