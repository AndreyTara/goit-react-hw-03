import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ContactForm({ onAdd }) {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Name consist from min 3 chars")
      .max(50, "Name consist from max 20 chars"),
    number: Yup.string()
      .required("This field is required!")
      .matches(
        /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
        "This field is required (+380123456789!)"
      ),
  });
  // /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
  // ?[\s.-]\d{3}[\s.-]\d{4}$
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, actions) => {
    onAdd(data);
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
