export const url = 'https://server-ecosmartbatt.azurewebsites.net/'
    //export const url = "http://localhost:5000/"
export const urlFunctions = "http://localhost:7071/api/"
    // export const urlFunctions = "https://ferroglobe.azurewebsites.net/api/"

export const urlsBaterias = {
    registrar: `${urlFunctions}RegistrarBateria`,
    getBateria: `${urlFunctions}GetBateria`
}

export const urlsNanocelulosa = {
    registrarOrigen: `${urlFunctions}BkNanocelulosaAddOrigen`,
    registrarProceso: `${urlFunctions}BkNanocelulosaAddProceso`,
    registrarProducto: `${urlFunctions}BkNanocelulosaAddProductoFinal`,
    getOrigen: `${urlFunctions}BkNanocelulosaGetOrigen`,
    getProceso: `${urlFunctions}BkNanocelulosaGetProceso`,
    getProducto: `${urlFunctions}BkNanocelulosaGetProducto`
}

export const urlCelOrigen = url + 'celulosa/origen/'

export const urlCelProceso = url + 'celulosa/proceso/'

export const urlCelProducto = url + 'celulosa/producto'

export const urlCelConsultaLotes = url + 'celulosa/consulta/'

export const urlCelOrigenHash = url + 'celulosa/hash/origen/'

export const urlCelProcesosHash = url + 'celulosa/hash/procesos/'

export const urlCelProductoHash = url + 'celulosa/hash/producto/'