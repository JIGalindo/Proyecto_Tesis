import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("La contraseña es obligatoria"),
    newPassword: Yup.string().required("este campo es obligatorio"),
    confirmNewPassword: Yup.string()
      .required("este campo es obligatorio")
      .oneOf(
        [Yup.ref("newPassword")],
        "Las nuevas contraseñas tienen que ser iguales"
      ),
  });
}
