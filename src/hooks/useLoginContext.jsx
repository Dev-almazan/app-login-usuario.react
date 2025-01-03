
import { useContext } from 'react';
import {LoginContext} from '../context/loginContext';

//funcion que retorna la variable global usuario para saber el status para el login
const useLogin=()=> {
    const user = useContext(LoginContext);
    return user || null;
}

export default useLogin;