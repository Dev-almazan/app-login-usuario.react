
import useLogin from "../hooks/useLoginContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import './login.css'

const FormularioLogin = (e) => {
    const user = useLogin();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({}); 
    const [globalError, setGlobalError] = useState('');

    const handleChange = (setterFunction) => (e) => {
        setterFunction(e.target.value);
        setErrors({ ...errors, [e.target.name]: validarInputs(e.target.name, e.target.value) });
    };
    
    const validarInputs = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Por favor ingresa un correo electrónico válido.';
                }
                break;
            case 'pass':
                if (value.length < 6) {
                    error = 'La contraseña debe tener al menos 6 caracteres.';
                }
            break;
        }
        return error;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(errors)
                if(errors.email == '' && errors.pass == '')
                {
                    // Aquí procesamos el servicio
                    const responseUser = [{
                        email : 'ernest_almazan@outlook.com',
                        password : 'Xag20596'
                    }]

                    const validacion = responseUser.find(user=> user.email == email && user.password == pass)
                    if(validacion)
                    {
                        user.login({
                            'email': email
                        });
                    }
                    else
                    {
                        setGlobalError('Usuario o contraseña incorrrecta.');  
                    }
                 
                }
                else
                {
                    setGlobalError('Favor de completar todos los campos.');
                }
            
    };

    return (
        <>
        <div className='cmpForm'>
                <Form className='card' id={e.id} onSubmit={handleSubmit}  >
                <h2 className='text-center'>Iniciar sesión</h2>
                    {globalError && <> <small className="alert alert-danger">{globalError}</small></>}
                <Form.Group className="mb-3" >
                    <h6 className="text-secondary">Dirección de email</h6>
                        <Form.Control type="email" onChange={handleChange(setEmail)} name="email" isInvalid={!!errors.email}
                            aria-describedby="pass-error" />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" >
                        <h6 className="text-secondary">Contraseña</h6>
                        <Form.Control type="password" onChange={handleChange(setPass)} name="pass" isInvalid={!!errors.pass} />
                        <Form.Control.Feedback type="invalid">
                            {errors.pass}
                        </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
                    
                  
            </Form>
            
        </div>
        </>      
    )
}

export default FormularioLogin;