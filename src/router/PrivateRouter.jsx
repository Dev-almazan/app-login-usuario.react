
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarCrm from '../components/navbar';
import ErrorPage from '../components/Error404/error404';
const PrivateRouter = () =>
{
    return(
        <>  
            <Router>
                <Routes>
                    <Route path="/" element={<NavbarCrm/>} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    );
}
export default PrivateRouter ;