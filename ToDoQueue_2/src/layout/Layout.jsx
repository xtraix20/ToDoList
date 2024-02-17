// Librerias de React
import { Outlet, useNavigation } from "react-router-dom";
// importar estilos
import './Layout.sass'
// Componentes son los espacios que tiene cada página
import Footer from "../components/Footer"
import Header from "../components/Header"
//import ToDoList from "../pages/ToDoList";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="Layout">
      <Header id ="Header"/>
        <main className="Main">
            {
                navigation.state === "loading" &&(
                    <div className="Loading">Loading...</div>
                )
            }
            <Outlet />
        </main>
      <Footer className="master"/>
    </div>
  )
}

export default Layout