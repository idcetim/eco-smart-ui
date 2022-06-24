
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelConsultaLotes   } from '../../api/endpoints'
import { header} from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"
import ShowCelulosaLotes from '../../components/ShowCelulosaLotes';


const ConsultarLotesCel = () => {
    const [lotes, setLotes] = useState([])

    const consultarHandler = async () => {
		const dataLotes = await fetch(urlCelConsultaLotes, header)
		const resLotes = await dataLotes.json()
        setLotes(resLotes)
    }
   console.log(lotes)
    
    useEffect(()=>{
        consultarHandler()
    },[])
return ( 
    <div className='web-wrapper'>
       <h3>Lotes registrados</h3>
        {lotes.length > 0 && <ShowCelulosaLotes lotes={lotes} />} 
        <div className='div-button-back'>
                <BackCelButton />
            </div>
    </div>
    
)
}

export default ConsultarLotesCel;