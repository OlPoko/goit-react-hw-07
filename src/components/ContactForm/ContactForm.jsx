import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 chars!")
    .max(50, "Must be max 50 chars!")
    .required("This field is required"),
  number: Yup.string().required("This field is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field className={styles.input} type="text" name="name" id="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.group}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field
            className={styles.input}
            type="tel"
            name="number"
            id="number"
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
