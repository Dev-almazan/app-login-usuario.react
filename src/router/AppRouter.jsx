

import { useContext } from "react";
import PublicRouter from "../router/PublicRouter";
import PrivateRouter from "../router/PrivateRouter";     
import { LoginContext } from '../context/loginContext';


/* Componente global router que define las rutas del usuario */
 const AppRouter = () =>
{
     //variable global usuario utilizar use context 
     const  {user}  = useContext(LoginContext);
     console.log(user)
    return(
        <>                       
        {
                user.logged ? <PrivateRouter/>  : <PublicRouter />
        }
        </>
    );
}

export default AppRouter ;