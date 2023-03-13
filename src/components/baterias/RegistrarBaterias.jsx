import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { urlsBaterias } from '../../api/endpoints';
import {
    Grid,
    Box,
    Button,
    TextField,
    IconButton,
    InputLabel,
    FormControl,
    MenuItem,
    Select
} from '@mui/material'
import { Web3Storage } from "web3.storage";
import { NFTStorage } from "nft.storage";

const RegistrarBaterias = () => {
    const [batterySpecs, setBatterySpecs] = useState({
        codigo: '',
        fecha: undefined,
        capacidad: '',
        voltaje: '',
        peso: '',
        densidadEnergetica: '',
        imagenRendimiento: '',
        stateOfHealth: '',
        materialesTinta: [{ name: '', code: '', origin: '' }],
        materialesElectrolito: [{ name: '', code: '', origin: '' }],
        materilesSilicioONanocelulosa: [{ tipo: 'nanocelulosa', codigo: '' }]
    });

    const saveBattery = async () => {
        const bateria = {...batterySpecs}

        if (bateria.imagenRendimiento && bateria.imagenRendimiento !== "") {
            const client = new Web3Storage({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg1MjAxRjA1MmFmZGNCYzU5RjE0MDFjYjQwRjlCN0U5NTlmMDZlYzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg3MDYxOTMxNzMsIm5hbWUiOiJFY28tU21hcnQtQmF0dCJ9.RQPbOcOd01bwUV6xKVw4Kvta6O5WaB1qxnPzNBQQ9UY"})

            const blob = new Blob([bateria.imagenRendimiento])

            const { car } = await NFTStorage.encodeBlob(blob)

            bateria.imagenRendimiento = await client.putCar(car)
        }

        let response = await fetch(urlsBaterias.registrar, {
            method: 'POST',
            body: JSON.stringify(bateria)
        })

        if (!response.ok) {
            response.json()
                .then(obj => {
                    if (obj.errorCode === 1 || obj.errorCode === 2) {
                        alert(obj.message)
                    }
                })

            throw new Error()
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let saveBatteryPromise = saveBattery()

        toast.promise(saveBatteryPromise, {
            loading: 'Registrando bateria',
            success: 'Registro finalizado',
            error: 'Error en el registro'
        },
            {
                style: {
                    minWidth: '250px',
                },
                success: {
                    duration: 4000,
                    icon: '✅',
                },
            })
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '500px', maxWidth: '90%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        margin="none"
                        name="codigo"
                        label="Código"
                        value={batterySpecs.codigo ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                codigo: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="date"
                        label="Date"
                        type="date"
                        value={batterySpecs.fecha?.toISOString().slice(0, 10) ?? ''}
                        onChange={(ev) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                fecha: new Date(ev.target.value)
                            })
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        margin="none"
                        name="capacidad"
                        label="Capacidad"
                        value={batterySpecs.capacidad ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                capacidad: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        margin="none"
                        name="voltaje"
                        label="Voltaje"
                        value={batterySpecs.voltaje ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                voltaje: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        margin="none"
                        name="peso"
                        label="Peso"
                        value={batterySpecs.peso ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                peso: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        margin="none"
                        name="densidadEnergetica"
                        label="Densidad energetica"
                        value={batterySpecs.densidadEnergetica ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                densidadEnergetica: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        margin="none"
                        name="stateOfHealth"
                        label="State of health"
                        value={batterySpecs.stateOfHealth ?? ''}
                        onChange={(e) => {
                            setBatterySpecs({
                                ...batterySpecs,
                                stateOfHealth: e.target.value
                            })
                        }}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputLabel sx={{ marginTop: "20px" }}>Imagen rendimiento</InputLabel>
                    <input
                        type='file'
                        onChange={ev => {
                            const file = ev.target.files[0]

                            const reader = new FileReader()

                            reader.addEventListener('load', () => {
                                setBatterySpecs({
                                    ...batterySpecs,
                                    imagenRendimiento: reader.result
                                })
                            })

                            reader.readAsDataURL(file)
                        }}
                    />
                </Grid>

                <Grid item sx={12}>
                    <InputLabel sx={{ marginTop: "20px" }}>Nanocelulosa y nanosilicio</InputLabel>
                    <RegistroSilicioYCelulosa materiales={batterySpecs?.materilesSilicioONanocelulosa} setMateriales={newMateriales => {
                        setBatterySpecs({
                            ...batterySpecs,
                            materilesSilicioONanocelulosa: newMateriales
                        })
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <InputLabel sx={{ marginTop: "20px" }}>Materiales tinta</InputLabel>
                    <RegistroMateriales materiales={batterySpecs?.materialesTinta} setMateriales={newMateriales => {
                        setBatterySpecs({
                            ...batterySpecs,
                            materialesTinta: newMateriales
                        })
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <InputLabel sx={{ marginTop: "20px" }}>Materiales electrolito</InputLabel>
                    <RegistroMateriales materiales={batterySpecs?.materialesElectrolito} setMateriales={newMateriales => {
                        setBatterySpecs({
                            ...batterySpecs,
                            materialesElectrolito: newMateriales
                        })
                    }} />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={ev => handleSubmit(ev)}>
                        Registrar Lote
                    </Button>
                </Grid>
            </Grid>

            <Toaster />
        </Box>
    );
}

const Material = ({
    value,
    onChange,
    onDelete,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
            <TextField
                required
                fullWidth
                margin="none"
                name="name"
                label="Nombre de la Materia Prima"
                value={value.name}
                onChange={handleChange}
            />

            <TextField
                required
                fullWidth
                margin="none"
                name="code"
                label="Código"
                value={value.code}
                onChange={handleChange}
            />

            <TextField
                required
                fullWidth
                margin="none"
                name="origin"
                label="Origen"
                value={value.origin}
                onChange={handleChange}
            />

            <IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

const CelulosaYSilicio = ({
    value,
    onChange,
    onDelete
}) => {
    const handleChange = e => {
        const { name, value } = e.target
        onChange(name, value)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
            <FormControl>
                <InputLabel>Tipo</InputLabel>
                <Select
                    value={value.tipo}
                    name="tipo"
                    label="Tipo"
                    onChange={handleChange}
                >
                    <MenuItem value={'nanocelulosa'}>Nanocelulosa</MenuItem>
                    <MenuItem value={'nanosilicio'}>Nanosilicio</MenuItem>
                </Select>
            </FormControl>

            <TextField
                name="codigo"
                label="Codigo"
                value={value.codigo}
                onChange={handleChange}
            />

            <IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}

const RegistroMateriales = ({
    materiales,
    setMateriales
}) => {
    const handleAddMaterial = () => {
        let newMateriales = [...materiales ?? []]
        newMateriales.push({ name: '', code: '', origin: '' })

        setMateriales(newMateriales)
    }

    const handleUpdateMaterial = (index, name, value) => {
        let newMateriales = [...materiales ?? []]
        newMateriales[index][name] = value

        setMateriales(newMateriales)
    }

    const handleDeleteMaterial = (index) => {
        let newMateriales = [...materiales ?? []]
        newMateriales.splice(index, 1)

        setMateriales(newMateriales)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {materiales?.map((material, index) => (
                <Material
                    key={index}
                    value={material ?? ''}
                    onChange={(name, value) => handleUpdateMaterial(index, name, value)}
                    onDelete={() => handleDeleteMaterial(index)}
                />
            ))}

            <Button startIcon={<AddIcon />} variant="outlined" onClick={handleAddMaterial} sx={{ mt: 2 }}>
                Añadir materia prima
            </Button>
        </Box>
    )
}

const RegistroSilicioYCelulosa = ({
    materiales,
    setMateriales
}) => {
    const handleAddMaterial = () => {
        let newMateriales = [...materiales ?? []]
        newMateriales.push({ tipo: 'nanocelulosa', code: '' })

        setMateriales(newMateriales)
    }

    const handleUpdateMaterial = (index, name, value) => {
        let newMateriales = [...materiales ?? []]
        newMateriales[index][name] = value

        setMateriales(newMateriales)
    }

    const handleDeleteMaterial = (index) => {
        let newMateriales = [...materiales ?? []]
        newMateriales.splice(index, 1)

        setMateriales(newMateriales)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {materiales?.map((material, index) => (
                <CelulosaYSilicio
                    key={index}
                    value={material ?? ''}
                    onChange={(name, value) => handleUpdateMaterial(index, name, value)}
                    onDelete={() => handleDeleteMaterial(index)}
                />
            ))}

            <Button startIcon={<AddIcon />} variant="outlined" onClick={handleAddMaterial} sx={{ mt: 2 }}>
                Añadir material
            </Button>
        </Box>
    )
}

export default RegistrarBaterias