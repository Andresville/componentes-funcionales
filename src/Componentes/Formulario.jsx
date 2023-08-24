import Button from '@mui/material/Button';

function Formulario (){
    return <form>
        <label>Nombre</label>
        <input type="text"/>
        <label>Apellido</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Promociones</label>
        <input type="checkbox"/>
        <label>Novedades</label>
        <input type="checkbox"/>
        <Button variant="contained" color="success">Registrarse</Button>
    </form>
}

export default Formulario