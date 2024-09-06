import { useRoutes } from "react-router";
import NoEncontrado from "../pages/NoEncontrado";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";

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
            ath: "/nosotros",
            element: <Nosotros />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
        {
            path: "*",
            element: <NoEncontrado />
        }
  ]);

  return routes;
};

export default Rutas;
