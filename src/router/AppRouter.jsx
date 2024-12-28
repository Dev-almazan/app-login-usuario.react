


import PublicRouter from "../router/PublicRouter";
import PrivateRouter from "../router/PrivateRouter";           

/* Componente global router que define las rutas del usuario */
 const AppRouter = () =>
{
   // variable global usuario utilizar use context para crear una variable global
    const user = {
        logged : false
    }
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