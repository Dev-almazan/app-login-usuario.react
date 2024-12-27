import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

const FormularioLogin = () => {

    return (
        <>
        <div className='cmpForm'>
                <Form className='card'>
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