import { useRoutes } from "react-router";
import NoEncontrado from "../pages/NoEncontrado";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";

const Rutas = () => {
  const routes = useRoutes(
    [
        {
            path: "/",
            element: <Inicio />,
        },
        {
            path: "/alta",
            element: <Alta />
        },
        { 
            path: "/nosotros",
            element: <Nosotros />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
        {
            path: "/carrito",
            element: <Carrito />
        },
        {
            path: "*",
            element: <NoEncontrado />
        }
  ]);

  return routes;
};

export default Rutas;
