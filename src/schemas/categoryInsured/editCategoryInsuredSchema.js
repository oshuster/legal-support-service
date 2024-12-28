import * as yup from 'yup';

export const editCategoryInsuredSchema = yup.object({
  id: yup.string().required("Поле 'id' обов'язкове"),
  code: yup.number().required("Поле 'code' обов'язкове"),
  name: yup
    .string()
    .required("Поле 'name' обов'язкове")
    .max(300, "Поле 'name' має бути не більше 300 символів"),
  description: yup
    .string()
    .required("Поле 'description' обов'язкове")
    .max(500, "Поле 'description' має бути не більше 500 символів"),
});
