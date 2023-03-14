import styles from './Animal.module.css'
import { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import Button from './Button';

function Animal() {


const [animal, setAnimal] = useState('Animal')  

useEffect(() => {
    getAnimal()
}, [])


  const getAnimal = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')

    const data = await response.json()
    setAnimal(data)
  }


    return(


    <div className={styles.painel}>
        
        <div className={styles.painel_foto}>

            {animal === 'Animal' ? <Loader/> : (

                <img className={styles.foto} alt='Em caso de erro no carregamento da imagem, por favor, tente novamente!' src={animal.message}></img>

            )}

        
        </div>
        
            <Button text='Outra foto' event={getAnimal}/>

        </div>
        
    )

}

export default Animal