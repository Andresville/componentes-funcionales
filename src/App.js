import './App.css';
import Formulario from './Componentes/Formulario';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3"align='center'>Formulario Registro</Typography>
      <Formulario/>
    </Container>
  );
}

export default App;
