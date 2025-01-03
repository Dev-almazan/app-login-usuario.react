

import useLogin from "../hooks/useLoginContext";
import PublicRouter from "../router/PublicRouter";
import PrivateRouter from "../router/PrivateRouter";     


/* Componente global router que define las rutas del usuario */
const AppRouter = () =>
{

    return(
        <>                       
        {
                useLogin().user.logged ? <PrivateRouter/>  : <PublicRouter />
        }
        </>
    );
}

export default AppRouter ;