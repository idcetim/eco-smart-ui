import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {
    TextField,
    IconButton,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableContainer,
    Paper,
    CardMedia,
    Box,
    Grid,
    Dialog,
    Typography,
    DialogContent
} from "@mui/material"
import { urlsBaterias, urlsNanocelulosa } from '../../api/endpoints';

const ConsultarBaterias = () => {
    const [codigoBuscado, setCodigoBuscado] = useState("")
    const [bateria, setBateria] = useState(undefined)

    const buscarBateria = async () => {
        let response = await fetch(`${urlsBaterias.getBateria}?codigoBateria=${codigoBuscado}`)

        if (response.ok) {
            setBateria(await response.json())
        }
    }

    return (
        <Box sx={{ paddingTop: "10px", display: "flex", flexDirection: "column", alignItems: "center", width: '90%', marginLeft: '5%' }}>
            <Box sx={{ width: '500px', maxWidth: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TextField
                    autoFocus
                    label="Codigo"
                    value={codigoBuscado}
                    onChange={ev => setCodigoBuscado(ev.target.value)}
                    sx={{ flex: 1 }}
                />

                <IconButton sx={{ marginLeft: '5px' }} onClick={buscarBateria}>
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                {bateria === undefined ?
                    <Box></Box>
                    :
                    bateria === null ?
                        <Box sx={{ width: '100%', textAlign: 'center' }}>La bateria no existe</Box>
                        :
                        <DashboardBateria bateria={bateria} />
                }
            </Box>
        </ Box>
    )
}

const DashboardBateria = ({ bateria }) => {
    const [modalData, setModalData] = useState({
        tipoSeleccionado: undefined,
        data: undefined
    })

    const Especificaciones = () => (
        <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Especificaciones</h2>

            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell align='right'>{(new Date(bateria?.fecha)).toDateString()}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Capacidad</TableCell>
                            <TableCell align='right'>{bateria?.capacidad} Ah</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Voltaje</TableCell>
                            <TableCell align='right'>{bateria?.voltaje} V</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Peso</TableCell>
                            <TableCell align='right'>{bateria?.peso} g</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Densidad energetica</TableCell>
                            <TableCell align='right'>{bateria?.densidadEnergetica} Wh / kg</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>State of health</TableCell>
                            <TableCell align='right'>{bateria?.stateOfHealth}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )

    const Materiales = ({ materiales }) => (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Elemento</b></TableCell>
                        <TableCell><b>Codigo</b></TableCell>
                        <TableCell><b>Origen</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {materiales.map((material, index) => (
                        <TableRow key={index}>
                            <TableCell>{material[0]}</TableCell>
                            <TableCell>{material[1]}</TableCell>
                            <TableCell>{material[2]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

    const MaterialesSicilioYNanocelulosa = ({ materiales }) => (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Tipo</b></TableCell>
                        <TableCell><b>Codigo</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {materiales.map((material, index) => (
                        <TableRow hover key={index} onClick={async () => {
                            let data

                            if (material[0] == 'nanocelulosa') {
                                data = await (await fetch(`${urlsNanocelulosa.getProducto}?codigo=${material[1]}`)).json()
                            }
                            else {
                                data = await (await fetch(`${urlsNanocelulosa.getProductoNanosilicio}?codigo=${material[1]}`)).json()
                            }

                            setModalData({
                                tipoSeleccionado: material[0],
                                data: data
                            })
                        }}>
                            <TableCell>{material[0]}</TableCell>
                            <TableCell>{material[1]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

    const ImagenRendimiento = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Rendimiento</h2>

            <CardMedia
                component="img"
                src={bateria?.imagenRendimiento}
                sx={{ width: '400px' }}
            />
        </Box>
    )

    const ModalDetalle = () => {
        const Celulosa = () => {
            return (
                <TableContainer sx={{ width: '800px', maxWidth: '90%', marginTop: '30px' }} component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component='th' scope='row'>Código:</TableCell>
                                <TableCell align='right'>{modalData.data.codigo}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Conductividad ionica:</TableCell>
                                <TableCell align='right'>{modalData.data.conductividadIonica}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Ancho medio particula:</TableCell>
                                <TableCell align='right'>{modalData.data.anchoMedioParticula}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Suspension:</TableCell>
                                <TableCell align='right'>{modalData.data.suspension}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Porcentaje suspension:</TableCell>
                                <TableCell align='right'>{modalData.data.porcentajeSuspension}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

        const Silicio = () => {
            return (
                <TableContainer sx={{ width: '800px', maxWidth: '90%', marginTop: '30px' }} component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component='th' scope='row'>Código:</TableCell>
                                <TableCell align='right'>{modalData.data?.codigo}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Fecha:</TableCell>
                                <TableCell align='right'>{modalData.data?.fecha}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Tamaño:</TableCell>
                                <TableCell align='right'>{modalData.data?.tamaño}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Calidad:</TableCell>
                                <TableCell align='right'>{modalData.data?.calidad}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Cantidad:</TableCell>
                                <TableCell align='right'>{modalData.data?.cantidad}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Materias primas asociadas:</TableCell>
                                <TableCell align='right'>
                                    {
                                        modalData.data?.codigosMMPP.map(codigo => {
                                            return (
                                                <a
                                                    href="#"
                                                    key={codigo}
                                                    style={{
                                                        marginLeft: '5px'
                                                    }}>
                                                    {codigo}
                                                </a>
                                            )
                                        })
                                    }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Productos asociados:</TableCell>
                                <TableCell align='right'>
                                    {
                                        modalData.data?.codigosProductos.map(codigo => {
                                            return (
                                                <a
                                                    href="#"
                                                    key={codigo}
                                                    style={{
                                                        marginLeft: '5px'
                                                    }}>
                                                    {codigo}
                                                </a>
                                            )
                                        })
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

        const ModalBody = () => {
            if (modalData.tipoSeleccionado === 'nanocelulosa') {
                return <Celulosa />
            }

            if (modalData.tipoSeleccionado === 'nanosilicio') {
                return <Silicio />
            }

            return <></>
        }

        return (
            <Dialog
                open={modalData.tipoSeleccionado !== undefined}
                onClose={() => {
                    setModalData({
                        ...modalData,
                        tipoSeleccionado: undefined
                    })
                }}

            >
                <DialogContent>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalData.tipoSeleccionado}
                    </Typography>

                    <Box>
                        <ModalBody />
                    </Box>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <>
            <Grid container spacing={2} sx={{ width: '1000px', maxWidth: '90%' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Especificaciones />
                </Grid>

                <Grid item xs={12} md={6}>
                    <ImagenRendimiento sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Materiales tinta</h2>
                        <Materiales materiales={bateria?.materialesTinta} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Materiales electrolito</h2>
                        <Materiales materiales={bateria?.materialesElectrolito} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Materiales silicio y nanocelulosa</h2>
                        <MaterialesSicilioYNanocelulosa materiales={bateria?.materilesSilicioONanocelulosa} />
                    </Box>
                </Grid>
            </Grid>

            <ModalDetalle />
        </>
    )
}

export default ConsultarBaterias