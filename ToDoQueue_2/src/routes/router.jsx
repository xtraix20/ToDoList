//rafce
// Librerias de React
import React from "react";
// Crear el enrutador(Los links del MÃ©nu)
import { createBrowserRouter } from "react-router-dom";
// PÃ¡ginas
import RMLocation from "../pages/RMLocation";
import NotFound from '../pages/NotFound';
import ToDoList from "../pages/ToDoList";
import RMCharacter from "../pages/RMCharacter";
import RMEpisode from "../pages/RMEpisode";
// Componete Base
import Layout from "../layout/Layout";
// Definir lo que hay dentro del enrutador
const router = createBrowserRouter([
    {
        // Si escribo una ruta que NO existe va a la pÃ¡gina de error
        path:"/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                // Si la base de la ruta estÃ¡ bien, pero el resto esta mal va a la pÃ¡gina de error
                errorElement: <NotFound/>,
                children:[
                    {
                        // Default route - show ToDoList when visiting root path
                        index: true,
                        element: <ToDoList/>
                    },
                    {
                        path: "/RMLocation",
                        element: <RMLocation/>
                    },
                    {
                        path: "/todo",
                        element: <ToDoList/>
                    },
                    {
                        path: "/RMCharacter",
                        element: <RMCharacter/>
                    },
                    {
                        path: "/RMEpisode",
                        element: <RMEpisode/>
                    }
                ]
            }
        ]
    }
], {
    basename: "/ToDoList"
})
export default router
