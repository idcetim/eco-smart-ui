import { TextField, Typography } from "@mui/material";
import TextInput from "../components/TextInput";
import { useState } from 'react';
import { Box, Button } from '@mui/material'

const Consultar = () => {
    const [codigo, setCodigo] = useState("")
    const [elementos, setElementos] = useState([])

    const consultarHandler = async () => {
        setElementos(["ola"])
    }

    // return (
    //     <div className='web-wrapper'>
    //         <h1 className="main-title consultar">Consultar Información</h1>
    //         <TextInput type="Codigo" setter={setCodigo} value={codigo}  />
    //         <button onClick={consultarHandler} className="button-registrar" >Consultar</button>
    //     </div>
    // )

    return (
        <Box sx={{ paddingTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", width: '90%', marginLeft: '5%' }}>
            <Typography variant="h3" sx={{ textAlign: 'center', color: '#3f51b5' }}>Consultar información</Typography>

            <Box sx={{ width: '400px', maxWidth: '90%', marginTop: '40px' }}>
                <TextField
                    autoFocus
                    label="Codigo"
                    fullWidth
                    value={codigo}
                    onChange={ev => setCodigo(ev.target.value)}
                />

                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained" sx={{ marginTop: "20px" }}>Consultar</Button>
                </div>
            </Box>
        </Box>
    )
}

export default Consultar;