
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioLogin from '../components/login';
import ErrorPage from '../components/Error404/error404';


 const PublicRouter = () =>
{
    return(
             <>               
                <Router>
                    <Routes>
                     
                    <Route path="/" element={<FormularioLogin id={'FormLogin'} user={'eee'} />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Router>
            </> 

    );
}

export default PublicRouter ;