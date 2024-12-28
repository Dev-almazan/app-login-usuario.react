import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from "./router/AppRouter";


const App=()=> {
  //definimos componente principal que manejara las rutas de la app
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App;
