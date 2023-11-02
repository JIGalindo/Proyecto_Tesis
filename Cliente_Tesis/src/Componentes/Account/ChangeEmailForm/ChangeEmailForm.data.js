import * as Yup from "yup"

export function initialValues(){
    return{
        email:"",
        password:""
    }
}

export function validationSchema(){
    return Yup.object({
        email:Yup.string().email("El email no es valido").required("El email es obligatorio para realizar el cambio"),
        password:Yup.string().required("La contraseña es obligatoria")
    });
}