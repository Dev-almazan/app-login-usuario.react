
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarCrm from '../components/navbar';
import HomeCrm from '../components/home';
import ErrorPage from '../components/Error404/error404';
const PrivateRouter = () =>
{
    return(
        <>  
            <Router>
                    <NavbarCrm />
                <Routes>
                    <Route path="/home" element={<HomeCrm />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    );
}
export default PrivateRouter ;