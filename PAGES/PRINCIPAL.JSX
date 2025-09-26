import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Layout } from "../components/layout/Layout";

import "./Principal.css";

export const Principal = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    return (
<Layout>
  <div className="principal-dashboard">
    {/*Bienvenida dentro del contenido (el header ya esta en layout)*/}
    <h1 className="principal-bienvenida">Bienvenido {user?.nombre}</h1>
    <p className="principal-rol">Rol: {user?.rol}</p>

    {/* Card */}
    <div className="principal-cards">
       <Card
        titulo = "Gestion de Usuarios"
        descripcion = "Crea, edita y elimine usaurios del sistema."
        onClick={() => navigate("/usuarios")}
       />

       <Card
        titulo = "Gestion de Roles"
        descripcion = "Crea, edita y elimina usuarios del sistema."
        onClick={() => navigate("/usuarios")}
       />

       <Card
         titulo = "Gestion de permisos"
         descripcion= "Define y organiza los permisos del sistema."
         onClick={() => navigate("/permisos")}
       />
    </div>
  </div>
</Layout>
    );
};