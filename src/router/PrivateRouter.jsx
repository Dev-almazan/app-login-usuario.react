
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarCrm from '../components/navbar';
import HomeCrm from '../components/home';
import ErrorPage from '../components/Error404/error404';
const PrivateRouter = () =>
{
    return(
        <>  
            <NavbarCrm />
            <Router>
                <Routes>
                    <Route path="/" element={<HomeCrm />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    );
}
export default PrivateRouter ;