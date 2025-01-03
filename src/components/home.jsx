import Container from 'react-bootstrap/Container';
import useLogin from '../hooks/useLoginContext';

const HomeCrm =()=> {
    const user = useLogin().user;
    console.log(user)
    return (
        <>
            <Container className='mt-3'>
                <h1 className='tex-center'>Bienvenido {user.data.name}</h1>
            </Container>
        </>
    );
}

export default HomeCrm;