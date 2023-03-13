import React from 'react';
import { FormContainer, Container, Input, Title, Error} from '../styles/StyledComponent';
import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from "yup";

const inputs = [
    { id: 1, label: "Nombre", placeholder: "Nombre: ", name: "name" },
    { id: 2, label: "Edad", placeholder: "Edad: ", name: "age" },
    { id: 3, label: "Pais", placeholder: "Pais: ", name: "country" },
    { id: 4, label: "Pelicula preferida", placeholder: "pelicula preferida: ", name: "favouriteMovie" }
]

const CinefiloForm = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    name: "",
    age: "",
    country: "",
    favouriteMovie: ""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(3, 'Tenes que ingresar al menos 3 letras')
          .max(20, 'Demasiadas letras')
          .required("Tenes que ingresar tu nombre"),
        age: Yup.string()
          .min(1, 'Tenes que ingresar al menos 1 caracter')
          .max(2, 'Demasiados caracteres')
          .required("Tenes que ingresar tu edad"),
        city: Yup.string()
          .min(3, 'Tenes que ingresar al menos 3 letras')
          .max(20, 'Demasiadas letras')
          .required("Tenes que ingresar tu pais "),
        dist: Yup.string()
          .min(1, 'Tenes que ingresar al menos 1 caracter')
          .max(3, 'Demasiados caracteres')
          .required("Tenes que ingresar tu pelicula favorita"),
      })
    )
  )

  const onSubmit = (values) => {
    console.log(values);
    handleFetchValues(values);
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

    return (
        <>
        <Title style={{textShadow: "5px 4px 3px whitesmoke"}}>¿Cuál es tu pelicula preferida?</Title>
        <FormContainer from="cinefilo">
            <form id="cinefilo-form" onSubmit={handleSubmit}>
            {
              inputs.map(field => (
                <Container key={field.id}>
                  <label>{field.label}</label>
                  <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={(e) => setFieldValue(field.name, e.target.value)}
                  />
                  {
                    errors[field.name] && (
                      <Error>{errors[field.name]}</Error>
                    )
                  }
                </Container>
              ))
            }
            </form>
            <Container content="row">
                <button form="cinefilo-form" btn="submit" type="submit">?</button>
            </Container>
        </FormContainer>
        </>
    )
}

export default CinefiloForm;