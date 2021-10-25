import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import Box from "@material-ui/core/Box";
import "./Form.scss";

const LoginForm = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
  >
    {({ submitForm, isSubmitting, touched, errors }) => (
      <Form>
        <Box margin={1}>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
            placeholder="Please Enter Email"
          />
        </Box>
        <Box margin={1}>
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
        </Box>

        <Box margin={5}>
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Login
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
