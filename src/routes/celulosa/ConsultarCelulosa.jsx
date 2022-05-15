import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import { urlCelConsultaOrigen, urlCelConsultaProcesos, urlCelConsultaProductos } from '../../api/endpoints'


const ConsultarCelulosa = () => {
    const [codigo, setCodigo] = useState("")
    const [origenData, setOrigenData] = useState([])
    const [procesosData, setProcesosData] = useState([])
    const [productoData, setProductoData] = useState([])

    const consultarHandler = async () => {
        const urlOrigen = `${urlCelConsultaOrigen}?code=${codigo}`
		const dataOrigen = await fetch(urlOrigen,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
		const resOrigen = await dataOrigen.json()
        setOrigenData(resOrigen)

        const urlProcesos = `${urlCelConsultaProcesos}?code=${codigo}`
		const dataProcesos = await fetch(urlProcesos,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
		const resProcesos = await dataProcesos.json()
        console.log(resProcesos)
        setProcesosData(resProcesos)

        const urlProducto = `${urlCelConsultaProductos}?code=${codigo}`
		const dataProducto = await fetch(urlProducto,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
		const resProducto = await dataProducto.json()
        setProductoData(resProducto)
    }
    console.log("Origen data", origenData)
    console.log("Procesos: ", procesosData)
    console.log("Producto: ", productoData)
    
return (
    <div>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <button onClick={consultarHandler}>Consultar</button>
        <BackHomeButton />
        <BackCelButton />
    </div>
    
)
}

export default ConsultarCelulosa;