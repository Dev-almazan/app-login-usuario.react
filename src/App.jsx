import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogin  from './components/navbar'
import FormularioLogin from './components/login';
import './App.css'

function App() {

  return (
    <>
      <NavbarLogin></NavbarLogin>
      <Router>
        <Routes>
          <Route path="/" element={<FormularioLogin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
