
const Validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Le nom est requis."
  }

  if (!values.email) {
    errors.email = "L'adresse mail est requise."
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "votre email est invalide."
  }

  if (!values.message) {
    errors.message = "Un petit mot à nous dire?"
  }
  return errors;
}

export default Validation
