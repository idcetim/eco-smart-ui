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
    Box
} from "@mui/material"
import { urlFunctions, urlsBaterias } from '../../api/endpoints';

const ConsultarBaterias = () => {
    const [codigoBuscado, setCodigoBuscado] = useState("")
    const [bateria, setBateria] = useState(undefined)

    console.log(urlFunctions)

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

            <Box sx={{ width: '100%' }}>
                {bateria === undefined ?
                    <Box></Box>
                    :
                    bateria === null ?
                        <Box sx={{paddingTop: '50px', width: '100%', textAlign: 'center'}}>La bateria no existe</Box>
                        :
                        <DashboardBateria bateria={bateria} />
                }
            </Box>
        </ Box>
    )
}

const DashboardBateria = ({ bateria }) => {
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
                            <TableCell>{material?.name}</TableCell>
                            <TableCell>{material?.code}</TableCell>
                            <TableCell>{material?.origin}</TableCell>
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
            />
        </Box>
    )

    return (
        <Box sx={{ width: '100%', marginTop: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Especificaciones />
            <ImagenRendimiento />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Materiales tinta</h2>
                    <Materiales materiales={bateria?.materialesTinta} />
                </Box>

                <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Materiales electrolito</h2>
                    <Materiales materiales={bateria?.materialesElectrolito} />
                </Box>
            </Box>
        </Box>
    )
}

export default ConsultarBaterias