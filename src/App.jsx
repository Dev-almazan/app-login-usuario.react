import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from "./router/AppRouter";
import {LoginProvider}  from './context/loginContext';


const App=()=> {
  //definimos componente principal que manejara las rutas de la app
  return (
    <>
    <LoginProvider>
        <AppRouter />
    </LoginProvider>
    </>
  )
}

export default App;
