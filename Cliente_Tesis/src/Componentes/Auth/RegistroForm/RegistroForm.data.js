import * as yup from "yup"

export function initialValues(){
    return{
        email:"",
        password:"",
        confirmpassword:"",
    }
}

export function validationSchema(){
    return yup.object({
        email:yup.string().email("El E-Mail no es correcto").required("El e-mail es obligatorio"),
        password:yup.string().required("la contraseña es obligatoria"),
        confirmpassword:yup.string().required("la contraseña es obligatoria").oneOf([yup.ref("password")],"Las contraseñas tienen que ser iguales")
    })
}