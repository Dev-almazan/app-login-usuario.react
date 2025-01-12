
import useLogin from '../hooks/useLoginContext';
import "./home.css";

const HomeCrm =()=> {
    const user = useLogin().user;
 
    return (
        <>
            <div className='home'>
                <h1 className='tex-center'>Bienvenido {user.data.email}</h1>
            </div>
        </>
    );
}

export default HomeCrm;