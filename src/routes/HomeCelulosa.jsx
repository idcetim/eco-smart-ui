import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/global.css"
import { Typography, Box, Button, Dialog, DialogTitle, TextField, DialogContent, DialogActions, FormControlLabel, Checkbox, Select, MenuItem, CircularProgress, Chip, Grid } from "@mui/material";
import { urlCelConsultaLotes } from "../api/endpoints";
import { header } from "../api/fetchHeader"
import { urlCelOrigen } from '../api/endpoints'
import toast, { Toaster } from 'react-hot-toast';
import { postHeader } from '../api/fetchHeader'

const origenes = ["Abeto", "Pino", "Eucalipto"]

const ModalOrigen = ({ open, close }) => {
  const [inputs, setInputs] = useState({
    codigo: "",
    celulosa: null,
    hemicelulosa: null,
    lignina: null,
    origen: origenes[0]
  })

  const registrarCallback = async () => {
    const promise = registrarHandler()

    toast.promise(promise, {
      loading: 'Registrando origen',
      success: 'Registro finalizado',
      error: 'Error en el registro'
    }, {
      style: {
        minWidth: '250px'
      },
      success: {
        duration: 4000,
        icon: '✅'
      }
    })
  }

  const registrarHandler = async () => {
    const bodyData = JSON.stringify(inputs)

    const response = await fetch(urlCelOrigen, { method: 'POST', headers: postHeader, body: bodyData, })
    
    if (response.ok) {
      let hash = await response.json()
    } 
    else {
      throw new Error(`
        Error registrando información del lote ${inputs.codigo}.
        Revisa que ese lote no haya sido registrado`
      )
    }

  }

  return (
    <Dialog open={open} onClose={close}>
      <Box sx={{ width: { xs: '250px', md: '300px' } }}>
        <DialogTitle>Registro de pasta de celulosa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            value={inputs.codigo}
            label={'Codigo'}
            sx={{ marginTop: '20px' }}
            onChange={ev => setInputs({ ...inputs, codigo: ev.target.value })}
          />

          <TextField
            type="number"
            fullWidth
            value={inputs.celulosa}
            label={'Celulosa %'}
            sx={{ marginTop: '10px' }}
            onChange={ev => setInputs({ ...inputs, celulosa: ev.target.value })}
          />

          <TextField
            type="number"
            fullWidth
            value={inputs.hemicelulosa}
            label="Hemicelulosa %"
            sx={{ marginTop: '10px' }}
            onChange={ev => setInputs({ ...inputs, hemicelulosa: ev.target.value })}
          />

          <TextField
            type="number"
            fullWidth
            value={inputs.lignina}
            label="Lignina %"
            sx={{ marginTop: '10px' }}
            onChange={ev => setInputs({ ...inputs, origen: ev.target.value })}
          />

          <DialogActions sx={{ marginTop: '20px' }}>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={registrarCallback}>Registrar</Button>
          </DialogActions>
        </DialogContent>
      </Box>
    </Dialog>
  )
}

const ModalProcesos = ({ open, close }) => {
  const [inputs, setInputs] = useState({
    codigo: "",
    pretratamientoMecanico: false,
    pretratamientoEnzimatico: false,
    pretratamientoQuimico: false,
    homogenizacion: false
  })

  return (
    <Dialog open={open} onClose={close}>
      <Box sx={{ width: { xs: '300px', md: '400px' } }}>
        <DialogTitle>Registro de procesos realizados</DialogTitle>

        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>

          <TextField
            type="text"
            fullWidth
            value={inputs.codigo}
            label="Codigo"
            sx={{ marginTop: "5px" }}
            onChange={ev => setInputs({ ...inputs, codigo: ev.target.value })}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', marginTop: '20px' }}>
            <FormControlLabel control={<Checkbox value={inputs.pretratamientoMecanico} onChange={ev => setInputs(ev.target.value)} />} label="Pretratamiento mecánico" />
            <FormControlLabel control={<Checkbox value={inputs.pretratamientoEnzimatico} onChange={ev => setInputs(ev.target.value)} />} label="Pretratamiento enzimático" />
            <FormControlLabel control={<Checkbox value={inputs.pretratamientoQuimico} onChange={ev => setInputs(ev.target.value)} />} label="Pretratamiento químico" />
            <FormControlLabel control={<Checkbox value={inputs.homogenizacion} onChange={ev => setInputs(ev.target.value)} />} label="Homogenización" />
          </Box>

          <DialogActions sx={{ marginTop: '20px' }}>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={close}>Registrar</Button>
          </DialogActions>
        </DialogContent>
      </Box>
    </Dialog >
  )
}

const formatos = ["Seca", "Suspensión"]

const ModalNanocelulosa = ({ open, close }) => {
  const [inputs, setInputs] = useState({
    codigo: "",
    conductividadIonica: "",
    anchoMedioParticula: "",
    formato: formatos[0],
    porcentajeSuspension: null
  })

  return (
    <Dialog open={open} onClose={close}>
      <Box>
        <DialogTitle>Registro de características de nanocelulosa</DialogTitle>

        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            type="text"
            fullWidth
            value={inputs.codigo}
            label="Codigo"
            sx={{ marginTop: "10px" }}
            onChange={ev => setInputs({ ...inputs, codigo: ev.target.value })}
          />

          <TextField
            type="text"
            fullWidth
            value={inputs.conductividadIonica}
            label="Conductividad iónica"
            sx={{ marginTop: "10px" }}
            onChange={ev => setInputs({ ...inputs, conductividadIonica: ev.target.value })}
          />

          <TextField
            type="text"
            fullWidth
            value={inputs.anchoMedioParticula}
            label="Ancho medio partícula"
            sx={{ marginTop: "10px" }}
            onChange={ev => setInputs({ ...inputs, anchoMedioParticula: ev.target.value })}
          />

          <Select
            fullWidth
            value={inputs.formato}
            sx={{ marginTop: "10px" }}
            onChange={ev => setInputs({ ...inputs, formato: ev.target.value })}
          >
            <MenuItem value={formatos[0]}>{formatos[0]}</MenuItem>
            <MenuItem value={formatos[1]}>{formatos[1]}</MenuItem>
          </Select>

          {inputs.formato === formatos[1] ?
            <TextField
              type="text"
              label="Porcentaje suspensión"
              fullWidth
              value={inputs.porcentajeSuspension}
              sx={{ marginTop: "10px" }}
              onChange={ev => setInputs({ ...inputs, porcentajeSuspension: ev.target.value })}
            />
            : null}

          <DialogActions sx={{ marginTop: '20px' }}>
            <Button onClick={close}>Cancelar</Button>
            <Button onClick={close}>Registrar</Button>
          </DialogActions>
        </DialogContent>
      </Box>
    </Dialog>
  )
}

const ModalConsultarLotes = ({ open, close }) => {
  const [lotes, setLotes] = useState(undefined)

  const getLotes = async () => {
    const dataLotes = await fetch(urlCelConsultaLotes, header)
    setLotes(await dataLotes.json())
  }

  useEffect(() => {
    getLotes()
  }, [])

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Lotes</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <ContenidoModal lotes={lotes} />
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const ContenidoModal = ({ lotes }) => {
  if (lotes === undefined) {
    return (
      <Box sx={{ width: '250px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (lotes === null || lotes.length === 0) {
    return (
      <Box sx={{ width: '250px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>No hay lotes</div>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '250px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {lotes.map(lote => {
        return (
          <Grid item={4}>
            <Chip label={lote} />
          </Grid>
        )
      })}
    </Box>
  )
}

const HomeCelulosa = () => {
  const navigate = useNavigate();
  const origenHandler = () => { navigate('/celulosa/origen/') }
  const procesosHandler = () => { navigate('/celulosa/procesos/') }
  const productoHandler = () => { navigate('/celulosa/producto/') }
  // const consultarHandler = () => { navigate('/celulosa/consulta/') }
  const consultarTodosHandler = () => { navigate('/celulosa/consulta/lotes') }
  // return (
  //   <div className="web-wrapper">
  //     <h1 className="main-title celulosa">Nanocelulosa</h1>
  //     <h3 className="title-task celulosa"> Registro de información</h3>
  //     <div>
  //       <button className="button-home" onClick={origenHandler}>Materia primas 🍂</button>
  //       <button className="button-home" onClick={procesosHandler}>Procesos 🔄</button>
  //       <button className="button-home" onClick={productoHandler}>Producto final 📂</button>
  //     </div>

  //     <h3 className="title-task celulosa">Consulta de información</h3>
  //     {/* <button className="button-home" onClick={consultarHandler}>Consultar lote 🔎</button> */}
  //     <button className="button-home" onClick={consultarTodosHandler}>Consultar Lotes 🔎</button>

  //   </div>
  // )

  const [modalOrigenOpen, setModalOrigenOpen] = useState(false)
  const [modalProcesosOpen, setModalProcesosOpen] = useState(false)
  const [modalNanocelulosaOpen, setModalNanocelulosaOpen] = useState(false)
  const [modalConsultarLotesOpen, setModalConsultarLotesOpen] = useState(false)

  return (
    <Box sx={{ paddingTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", width: '90%', marginLeft: '5%' }}>
      <Toaster />
      
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#3f51b5' }}>Nanocelulosa</Typography>
      <Typography variant="h5" sx={{ marginTop: '40px' }}>Registro de información</Typography>

      <Button onClick={() => setModalOrigenOpen(true)}>Materia primas 🍂</Button>
      <Button onClick={() => setModalProcesosOpen(true)}>Procesos 🔄</Button>
      <Button onClick={() => setModalNanocelulosaOpen(true)}>Producto final 📂</Button>

      <Typography variant="h5" sx={{ marginTop: '40px' }}>Consulta de información</Typography>

      <Button onClick={() => setModalConsultarLotesOpen(true)}>Consultar Lotes 🔎</Button>

      <ModalOrigen open={modalOrigenOpen} close={() => setModalOrigenOpen(false)} />
      <ModalProcesos open={modalProcesosOpen} close={() => setModalProcesosOpen(false)} />
      <ModalNanocelulosa open={modalNanocelulosaOpen} close={() => setModalNanocelulosaOpen(false)} />
      <ModalConsultarLotes open={modalConsultarLotesOpen} close={() => setModalConsultarLotesOpen(false)} />
    </Box>
  )

}

export default HomeCelulosa;