import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import ShowCelulosaData from '../../components/ShowCelulosaData';
import { urlCelConsultaOrigen, urlCelConsultaProcesos, urlCelConsultaProductos } from '../../api/endpoints'
import { header} from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"

const ConsultarCelulosa = () => {
    const [codigo, setCodigo] = useState("")
    const [origenData, setOrigenData] = useState([])
    const [procesosData, setProcesosData] = useState([])
    const [productoData, setProductoData] = useState([])

    const consultarHandler = async () => {
        const urlOrigen = `${urlCelConsultaOrigen}?code=${codigo}`
		const dataOrigen = await fetch(urlOrigen, header)
		const resOrigen = await dataOrigen.json()
        setOrigenData(resOrigen)

        const urlProcesos = `${urlCelConsultaProcesos}?code=${codigo}`
		const dataProcesos = await fetch(urlProcesos, header)
		const resProcesos = await dataProcesos.json()
        setProcesosData(resProcesos)

        const urlProducto = `${urlCelConsultaProductos}?code=${codigo}`
		const dataProducto = await fetch(urlProducto, header)
		const resProducto = await dataProducto.json()
        setProductoData(resProducto)
    }
   
    
return (
    <div className='web-wrapper'>
        <h3>Consultar información sobre lote de nanocelulosa</h3>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <button className='button-registrar' onClick={consultarHandler} disabled={!codigo}>Consultar🔎</button>
        <ShowCelulosaData origenData={origenData} procesosData={procesosData} productoData={productoData} codigo={codigo}/>
        <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
    </div>
    
)
}

export default ConsultarCelulosa;