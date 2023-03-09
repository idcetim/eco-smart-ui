import { 
    TextField, 
    Box, 
    Button, 
    Typography, 
    Tabs, 
    Tab,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Table
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

const Origen = () => {
    const [tabValue, setTabValue] = useState(0)

    const RegistrarOrigen = () => {
        const [values, setValues] = useState({
            codigo: "",
            celulosa: "",
            hemicelulosa: "",
            lignina: ""
        })

        const saveOrigen = async () => {
            let response = await fetch(urlsNanocelulosa.registrarOrigen, {
                method: 'POST',
                body: JSON.stringify(values)
            })
    
            if (!response.ok) {
                throw new Error()
            }
        }
    
        const handleSubmit = async (event) => {
            event.preventDefault()
    
            let saveOrigenPromise = saveOrigen()
    
            toast.promise(saveOrigenPromise, {
                loading: 'Registrando origen',
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
                    label="Codigo"
                    value={values.codigo}
                    onChange={ev => setValues({
                        ...values,
                        codigo: ev.target.value
                    })}
                    sx={{ width: '100%' }}
                />

                <TextField
                    inputProps={{ inputMode: 'numeric' }}
                    label="Celulosa"
                    value={values.celulosa}
                    onChange={ev => {
                        setValues({
                            ...values,
                            celulosa: ev.target.value.toString()
                        })
                    }}
                    sx={{ width: '100%', marginTop: '10px' }}
                />

                <TextField
                    inputProps={{ inputMode: 'numeric' }}
                    label="Hemicelulosa"
                    value={values.hemicelulosa}
                    onChange={ev => {
                        setValues({
                            ...values,
                            hemicelulosa: ev.target.value.toString()
                        })
                    }}
                    sx={{ width: '100%', marginTop: '10px' }}
                />

                <TextField
                    inputProps={{ inputMode: 'numeric' }}
                    label="Lignina"
                    value={values.lignina}
                    onChange={ev => {
                        setValues({
                            ...values,
                            lignina: ev.target.value.toString()
                        })
                    }}
                    sx={{ width: '100%', marginTop: '10px' }}
                />

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
                </Box>
            </Box>
        )
    }

    const ConsultarOrigen = () => {
        const [codigo, setCodigo] = useState("")
        const [values, setValues] = useState(null)

        const handleSearch = async () => {
            let data = await (await fetch(`${urlsNanocelulosa.getOrigen}?codigo=${codigo}`)).json()

            setValues(data)
        }

        const OrigenData = () => {
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
                                <TableCell component='th' scope='row'>Celulosa</TableCell>
                                <TableCell align='right'>{values.celulosa}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Hemicelulosa:</TableCell>
                                <TableCell align='right'>{values.hemicelulosa}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Lignina:</TableCell>
                                <TableCell align='right'>{values.lignina}</TableCell>
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

                    <OrigenData />
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
                <RegistrarOrigen />
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                <ConsultarOrigen />
            </TabPanel>
        </Box>
    )
}

export default Origen