export const url = 'https://server-ecosmartbatt.azurewebsites.net/'
    //export const url = "http://localhost:5000/"
export const urlFunctions = process.env.REACT_APP_API_ENDPOINT ?? "https://ferroglobe.azurewebsites.net/api/"


console.log(process.env.REACT_APP_API_ENDPOINT)

export const urlsBaterias = {
    registrar: `${urlFunctions}RegistrarBateria`,
    getBateria: `${urlFunctions}GetBateria`
}

export const urlCelOrigen = url + 'celulosa/origen/'

export const urlCelProceso = url + 'celulosa/proceso/'

export const urlCelProducto = url + 'celulosa/producto'

export const urlCelConsultaLotes = url + 'celulosa/consulta/'

export const urlCelOrigenHash = url + 'celulosa/hash/origen/'

export const urlCelProcesosHash = url + 'celulosa/hash/procesos/'

export const urlCelProductoHash = url + 'celulosa/hash/producto/'