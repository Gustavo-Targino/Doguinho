import { useState, useEffect } from "react"
import styles from './Animal.module.css'
import Loader from "./Loader/Loader"
import Button from "./Button"

function AnimalList() {
    
    const [list, setList] = useState('Carregando')

    const [breed, setBreed] = useState('affenpinscher')

    const [image, setImage] = useState()

    const [number, setNumber] = useState()

    useEffect(() => {
        getList()
    }, [])


    useEffect(()=>{
        getImage()
    }, [breed])

  
    const getList = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")

        const data = await response.json()

        const breeds = Object.keys(data.message)

        setList(breeds)

        getImage()
    }



    const getImage = async () => {

        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)

        const data = await response.json()

        setImage(data)

        if (typeof(image)!=='undefined') {
            const pics = image.message.length

            const numero = randomNumber(pics)

            setNumber(numero)
        } else {
            setNumber(0)
        }
       
    }
    
    function randomNumber(number) {
        return Math.floor(Math.random() * number)
    }

    return (
        <div>

           {
           typeof(image) === 'undefined' || list === 'Carregando' ?
           <div> 
             <Loader/>
           </div>
           : ( 
          
            <div className={styles.painel}>
                      
                <h2 className={styles.animal_text}>Selecione uma raça!  <select value={breed} onChange={(e)=>setBreed(e.target.value)}>{list.map((breed, index)=>  <option className={styles.item} key={index}>{breed}</option> )} </select>  </h2>

                <div className={styles.painel_foto}>
            
                    <img src={ typeof(image.message[number])==='undefined' ? image.message[0] : (image.message[number])} alt='Em caso de falha no carregamento da imagem, por favor, tente novamente!' className={styles.foto}></img>

                </div>

                <Button event={getImage} text='Outra foto'/>

           </div>
            
           
                ) 
           
           }

        </div>
    )

}

export default AnimalList