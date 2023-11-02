import * as Yup from "yup";

export function initialValues(){
    return{
        name:"",
        address:"",
        description:"",
        location:null,
        images:[],
    }
}

export function validationSchema(){
    return Yup.object({
        name:Yup.string().required("Campo Obligatorio"),
        address:Yup.string().required("Campo Obligatorio"),
        description:Yup.string().required("Campo Obligatorio"),
        location:Yup.object().required("la localizacion es requerrida"),
        images:Yup.array().min(1, "se requiere una imagen como minimo").required("la imagen es requerida")
    })
}