import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useLogin from "../hooks/useLoginContext";
import { useNavigate } from "react-router-dom";
import "./navbar.css";


const NavbarCrm =()=> {
    const navigate = useNavigate();
    const user = useLogin();
    return (
        <Navbar expand="lg" className="navbar_crm text-white">
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <NavDropdown title="Configuración" id="basic-nav-dropdown ">
                        <NavDropdown.Item className='navbar_crm_items' onClick={()=>{
                                user.logout();
                                navigate('/'); // Redirige a la ruta '/login' después de cerrar sesión     
                            }} >    Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
          
        </Navbar>
    );
}

export default NavbarCrm;