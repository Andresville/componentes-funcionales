import { useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Formulario() {
    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[prom, setProm] = useState(true)
    const[nov, setNov] = useState(false)
    const[error, setError] = useState({
        name:{
            error: false,
            message : "Al menos 3 caracteres",
        }
    })

    function validarNombre(nombre){
        if(nombre.length >= 3){
            return {name: {error: false, message:"" }}
        }else{
            return {name: {error: true, message:"Al menos 3 caracteres" }}
        }
    }

    return <form onSubmit={(e)=>{
        e.preventDefault()
        console.log({name, lastName, email, prom, nov})
    }}>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            onChange={(e)=>{
                setName(e.target.value)
            }}
            value={name}
            error ={error.name.error}
            helperText={error.name.error ? error.name.message : ""}
            onBlur={(e)=>{
                setError(validarNombre(e.target.value))
            }}
            />
        <TextField 
            id="lastName" 
            label="Apellido" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e)=>{
                setLastName(e.target.value)
            }}
            value={lastName} 
            />
        <TextField 
            id="email" 
            label="Correo" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            />
        <FormGroup>
            <FormControlLabel 
                control={<Switch />} 
                label="Promociones" 
                onChange={(e)=>{
                    setProm(e.target.checked)
                }}
                checked={prom}
                />
            <FormControlLabel 
                control={<Switch />} 
                label="Novedades" 
                onChange={(e)=>{
                    setNov(e.target.checked)
                }}
                checked={nov}
                />
        </FormGroup>
        <Button variant="contained" color="success" type='submit'>Registrarse</Button>
    </form>
}

export default Formulario