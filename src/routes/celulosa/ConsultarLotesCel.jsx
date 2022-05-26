
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelConsultaLotes   } from '../../api/endpoints'
import { header} from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"
import ShowCelulosaLotes from '../../components/ShowCelulosaLotes';


const ConsultarLotesCel = () => {
    const [lotes, setLotes] = useState([])

    const consultarHandler = async () => {
        const urlLotes = `${urlCelConsultaLotes}`
		const dataLotes = await fetch(urlLotes, header)
		const resLotes = await dataLotes.json()
        setLotes(resLotes)
    }
   console.log(lotes)
    
return ( 
    <div className='web-wrapper'>
        <h3>Consultar información sobre nanocelulosa</h3>
        <button className='button-registrar' onClick={consultarHandler} >Ver lotes registrados🔎</button>
        {lotes.length > 0 && <ShowCelulosaLotes lotes={lotes} />}
       {lotes.length > 0 && <hr/>}  
        <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
    </div>
    
)
}

export default ConsultarLotesCel;