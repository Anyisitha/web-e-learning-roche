import useApi from "api";
import useHelpers from "helpers";
import { ILoginAdmin, ILoginAdminAction } from "models/interfaces/LoginAdmin.interfaces";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const useLoginAdmin = () => {
    /** Helpers */
    const { useNavigationHelpers } = useHelpers();
    const { history } = useNavigationHelpers();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useLoginAdminActions } = useActions();
    const { actLoginAdmin } = useLoginAdminActions();

    /** Form Hooks */
    const {
        control,
        handleSubmit
    } = useForm({
        "mode": "onChange"
    });

    /** Handlers */
    const handleLogin = useCallback((data: ILoginAdmin) => {
        const request: ILoginAdminAction = {
            user: data,
            onSuccess: () => history.push("/admin"),
            onError: (error: any) =>
            Swal.fire({
                icon: "error",
                title: "Su contraseña es incorrecta",
            })
        }

        dispatch<any>(actLoginAdmin(request));
    }, [dispatch])

    const handleLoginAdmin = useCallback((data: ILoginAdmin) => {
        const request: ILoginAdminAction = {
            user: data,
            onSuccess: () => history.push("/dashboard"),
            onError: (error: any) => {
                if(error.response.status === 404) {
                    Swal.fire({
                        icon: "error",
                        title: "Usuario no encontado!",
                        text: "Validad los datos y vuelve a intentarlo",
                    })
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Su usuario o contraseña son incorrectas",
                        text: "Validad su contraseña vuelve a intentarlo",
                    })
                }
            }
        }

        dispatch<any>(actLoginAdmin(request));
    }, [dispatch])

    return {
        control,
        handleSubmit,
        handleLogin,
        handleLoginAdmin
    }
}

export default useLoginAdmin;