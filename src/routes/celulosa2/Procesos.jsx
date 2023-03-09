import { 
    TextField, 
    Box, 
    Button, 
    Checkbox, 
    FormControlLabel, 
    FormGroup, 
    Tabs,
    Table,
    Paper,
    TableCell,
    TableRow,
    TableBody,
    TableContainer,
    Tab 
} from "@mui/material"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import { urlsNanocelulosa } from "../../api/endpoints";
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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

const Procesos = () => {
    const [tabValue, setTabValue] = useState(0)

    const RegistrarProceso = () => {
        const [values, setValues] = useState({
            codigo: "",
            pretratamientoMecanico: false,
            pretratamientoEnzimatico: false,
            pretratamientoQuimico: false,
            homogeinizacion: false
        })

        const saveProceso = async () => {
            let response = await fetch(urlsNanocelulosa.registrarProceso, {
                method: 'POST',
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                throw new Error()
            }
        }

        const handleSubmit = async (event) => {
            event.preventDefault()

            console.log(values)

            let saveOrigenPromise = saveProceso()

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
                    label="Codigo"
                    value={values.codigo}
                    onChange={ev => setValues({
                        ...values,
                        codigo: ev.target.value
                    })}
                    sx={{ width: '100%' }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginTop: '20px' }}>
                    <FormControlLabel control={<Checkbox value={values.pretratamientoMecanico} onChange={ev => setValues({
                        ...values,
                        pretratamientoMecanico: ev.target.value
                    })} />} label="Pretratamiento mecánico" />

                    <FormControlLabel control={<Checkbox value={values.pretratamientoEnzimatico} onChange={ev => setValues({
                        ...values,
                        pretratamientoEnzimatico: ev.target.value
                    })} />} label="Pretratamiento enzimático" />

                    <FormControlLabel control={<Checkbox value={values.pretratamientoQuimico} onChange={ev => setValues({
                        ...values,
                        pretratamientoQuimico: ev.target.value
                    })} />} label="Pretratamiento químico" />

                    <FormControlLabel control={<Checkbox value={values.homogeinizacion} onChange={ev => setValues({
                        ...values,
                        homogeinizacion: ev.target.value
                    })} />} label="Homogenización" />
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
                </Box>
            </Box>
        )
    }

    const BooleanCell = ({value}) => {
        if (value) {
            return (
                <TableCell align='right'>
                    <CheckIcon />
                </TableCell>
            )
        }

        return(
            <TableCell align='right'>
                <CloseIcon />
            </TableCell>
        )
    }

    const ConsultarProceso = () => {
        const [codigo, setCodigo] = useState("")
        const [values, setValues] = useState(null)

        const handleSearch = async () => {
            let data = await (await fetch(`${urlsNanocelulosa.getProceso}?codigo=${codigo}`)).json()

            setValues(data)
        }

        const ProcesoData = () => {
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
                                <TableCell component='th' scope='row'>Pretratamiento mecanico:</TableCell>
                                <BooleanCell value={values.pretratamientoMecanico} />
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Pretratamiento enzimatico:</TableCell>
                                <BooleanCell value={values.pretratamientoEnzimatico} />
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Pretratamiento quimico:</TableCell>
                                <BooleanCell value={values.pretratamientoQuimico} />
                            </TableRow>

                            <TableRow>
                                <TableCell component='th' scope='row'>Homogeinizacion:</TableCell>
                                <BooleanCell value={values.homogeinizacion} />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', marginLeft: '5%' }}>
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

                    <ProcesoData />
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
                <RegistrarProceso />
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                <ConsultarProceso />
            </TabPanel>
        </Box>
    )
}

export default Procesos