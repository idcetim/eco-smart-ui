
import { useState, useEffect } from 'react';
import BackCelButton from '../../components/BackCelButton';
import { urlCelConsultaLotes   } from '../../api/endpoints'
import { header} from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"
import ShowCelulosaLotes from '../../components/ShowCelulosaLotes';
import { Loading } from '../../components/Loading';


const ConsultarLotesCel = () => {
    const [lotes, setLotes] = useState(undefined)

    const searchAllLotes = async () => {
		const dataLotes = await fetch(urlCelConsultaLotes, header)
        setLotes(await dataLotes.json())
    }
   
    useEffect(()=>{
        searchAllLotes()
    },[])

return ( 
    <div className='web-wrapper'>
        <div className='div-button-back'>
                <BackCelButton />
        </div>
       <h3>Lotes registrados</h3>
        {lotes !== undefined && <ShowCelulosaLotes lotes={lotes} />} 
        {lotes === undefined && <Loading text={"Cargando"} />}
    </div>
)
}

export default ConsultarLotesCel;