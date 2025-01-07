
import useLogin from "../hooks/useLoginContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import './login.css'

const FormularioLogin = (e) => {
    const user = useLogin();
    console.log(user)

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
                    // Aquí procesas los datos del formulario
                    user.login({
                        'email': email
                    });
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
                <h1 className='text-center'>Iniciar sesión</h1>
                    {globalError && <> <small className="alert alert-danger">{globalError}</small></>}
                <Form.Group className="mb-3" >
                    <h6 className="text-secondary">Dirección de email</h6>
                        <Form.Control type="email" onChange={handleChange(setEmail)} name="email" />
                        {errors.email && <> <small className="text-left text-danger p-1">{errors.email}</small></>}
                </Form.Group>

                <Form.Group className="mb-3" >
                        <h6 className="text-secondary">Contraseña</h6>
                        <Form.Control type="password" onChange={handleChange(setPass)} name="pass" />
                        {errors.pass && <> <small className="text-left text-danger p-1">{errors.pass}</small></>}
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