import { userState, useEffect, useState } from "react";
import { ModalRolPermiso } from "../components/ui/ModalRolPermiso";
import { leerRoles } from "../services/rolService";
import {
    leerRolPermisos,
    crearRolPermiso,
    eliminarRolPermiso,s
    leerPermisosDeRol,
} from "../services/rolPermisoService";
import { Layout } from "../components/layout/Layout";
import "./Pagina.css";

export const RolPermisoPagina = () => {
    const [rolPermisos, setRolPermisos] = useState([]);
    const [roles, setRoles] = useState([]);
    const [permisos, setPermisos] = useState([]);
    const [relacionSeleccionada, setRelacionSeleccionada] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchRoles();
        fetchPermisos();
        fetchRolPermisos();
    }, []);
}