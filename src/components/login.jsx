import useLogin from "../hooks/useLoginContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

const FormularioLogin = (e) => {

    const user = useLogin();
    console.log(user)

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí procesas los datos del formulario
        user.login({
            'name': 'Administrador 01'
        });
    };

    return (
        <>
        <div className='cmpForm'>
                <Form className='card' id={e.id} onSubmit={handleSubmit}>
                <h1 className='text-center'>Iniciar sesión</h1>

                <Form.Group className="mb-3" >
                    <Form.Label>Dirección de email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese usuario" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Continuar
                </Button>
            </Form>

        </div>
        </>      
    )
}

export default FormularioLogin;