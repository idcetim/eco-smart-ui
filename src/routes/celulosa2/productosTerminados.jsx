import { 
    TextField, 
    Box, 
    Button, 
    Select, 
    MenuItem,
    Table,
    Paper,
    TableCell,
    TableRow,
    TableBody,
    TableContainer,
    Tab,
    Tabs
} from "@mui/material"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import { urlsNanocelulosa } from "../../api/endpoints";
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const formatos = ["Seca", "Suspensión"]

const ProductosTerminados = () => {
    const [tabValue, setTabValue] = useState(0)

    const RegistrarProducto = () => {
        const [values, setValues] = useState({
            codigo: "",
            conductividadIonica: "",
            anchoMedioParticula: "",
            suspension: formatos[0],
            porcentajeSuspension: ""
        })

        const saveProducto = async () => {
            let response = await fetch(urlsNanocelulosa.registrarProducto, {
                method: 'POST',
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error()
            }
        }

        const handleSubmit = async (event) => {
            event.preventDefault()

            let saveOrigenPromise = saveProducto()

            toast.promise(saveOrigenPromise, {
                loading: 'Registrando proceso',
                success: 'Registro finalizado',
                error: 'Error en el registro'
            },
                {
                    style: {
                        minWidth: '250px'
                    },
                    success: {
                        duration: 4000,
                        icon: '✅',
                    }
                }
            )
        }

        return (
            <Box sx={{ marginTop: "40px", width: '400px', maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Toaster />

                <TextField
                    type="text"
                    fullWidth
                    value={values.codigo}
                    label="Codigo"
                    sx={{ marginTop: "10px" }}
                    onChange={ev => setValues({ ...values, codigo: ev.target.value })}
                />

                <TextField
                    type="text"
                    fullWidth
                    value={values.conductividadIonica}
                    label="Conductividad iónica"
                    sx={{ marginTop: "10px" }}
                    onChange={ev => setValues({ ...values, conductividadIonica: ev.target.value })}
                />

                <TextField
                    type="text"
                    fullWidth
                    value={values.anchoMedioParticula}
                    label="Ancho medio partícula"
                    sx={{ marginTop: "10px" }}
                    onChange={ev => setValues({ ...values, anchoMedioParticula: ev.target.value })}
                />

                <Select
                    fullWidth
                    value={values.suspension}
                    sx={{ marginTop: "10px" }}
                    onChange={ev => setValues({ ...values, suspension: ev.target.value })}
                >
                    <MenuItem value={formatos[0]}>{formatos[0]}</MenuItem>
                    <MenuItem value={formatos[1]}>{formatos[1]}</MenuItem>
                </Select>

                {values.suspension === formatos[1] ?
                    <TextField
                        type="text"
                        label="Porcentaje suspensión"
                        fullWidth
                        value={values.porcentajeSuspension}
                        sx={{ marginTop: "10px" }}
                        onChange={ev => setValues({ ...values, porcentajeSuspension: ev.target.value })}
                    />
                    : null}

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
                </Box>
            </Box>
        )
    }

    const ConsultarProducto = () => {
        const [codigo, setCodigo] = useState("")
        const [values, setValues] = useState(null)

        const handleSearch = async () => {
            let data = await (await fetch(`${urlsNanocelulosa.getProducto}?codigo=${codigo}`)).json()

            setValues(data)
        }

        const ProductoData = () => {
            if (!values) {
                return <></>
            }

            return (
                <TableContainer sx={{ width: '800px', maxWidth: '90%', marginTop: '30px' }} component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component='th' scope='row'>Código:</TableCell>
                                <TableCell align='right'>{values.codigo}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Conductividad ionica:</TableCell>
                                <TableCell align='right'>{values.conductividadIonica}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Ancho medio particula:</TableCell>
                                <TableCell align='right'>{values.anchoMedioParticula}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Suspension:</TableCell>
                                <TableCell align='right'>{values.suspension}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Porcentaje suspension:</TableCell>
                                <TableCell align='right'>{values.porcentajeSuspension}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

        return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: '90%', marginLeft: '5%' }}>
                <Box sx={{ width: '400px', maxWidth: '90%', marginTop: '40px' }}>
                    <TextField
                        autoFocus
                        label="Codigo"
                        fullWidth
                        value={codigo}
                        onChange={ev => setCodigo(ev.target.value)}
                    />

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "20px" }}
                            onClick={handleSearch}
                        >Consultar</Button>
                    </div>

                    <ProductoData />
                </Box>
            </Box>
        )
    }

    return (
        <Box>
            <Tabs
                value={tabValue}
                onChange={(event, newValue) => {
                    setTabValue(newValue)
                }}
                centered
            >
                <Tab label="Registrar" {...a11yProps(0)} />
                <Tab label="Consultar" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
                <RegistrarProducto />
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                <ConsultarProducto />
            </TabPanel>
        </Box>
    )
}

export default ProductosTerminados