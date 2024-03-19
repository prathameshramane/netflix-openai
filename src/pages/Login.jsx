import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InvalidIcon from "../assets/icons/InvalidIcon";
import ErrorMessage from "../components/ErrorMessage";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email address field is required."),
  password: Yup.string()
    .required("Password field is required.")
    .min(8, "Password must be minimun 8 characters.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      { message: "Password not strong enough" }
    ),
});

const signUpFormSchema = loginFormSchema.concat(
  Yup.object().shape({
    fullName: Yup.string().required("Full name is required."),
  })
);

const Login = () => {
  const [isLoginEnabled, setIsLoginEnabled] = useState(true);

  const toggleIsLoginEnabled = () => {
    setIsLoginEnabled(!isLoginEnabled);
  };

  const setInitialFormValue = () => {
    let initialForm = { email: "", password: "" };
    if (!isLoginEnabled) initialForm = { ...initialForm, fullName: "" };
    return initialForm;
  };

  return (
    <>
      <div className="absolute top-0 w-full h-full -z-20">
        <img className="w-full h-full" src={"/background.jpg"} />
      </div>

      <div className="absolute top-0 w-full h-full bg-opacity-20 bg-black -z-10"></div>

      <div className="flex justify-center my-8">
        <div className="p-16 w-3/12 bg-black bg-opacity-70 rounded">
          <h1 className="font-bold text-4xl text-white mb-4">
            {isLoginEnabled ? "Sign In" : "Sign Up"}
          </h1>

          <Formik
            initialValues={setInitialFormValue()}
            validationSchema={
              isLoginEnabled ? loginFormSchema : signUpFormSchema
            }
            onSubmit={(values) => console.log(values)}
          >
            {({ errors, touched, handleReset }) => (
              <Form className="flex flex-col">
                {!isLoginEnabled && (
                  <>
                    <InputBox name="fullName" placeholder="Full Name" />
                    {touched.fullName && errors.fullName && (
                      <ErrorMessage>{errors.fullName}</ErrorMessage>
                    )}
                  </>
                )}
                <InputBox type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {touched.password && errors.password && (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                )}
                <Button type="submit">
                  {isLoginEnabled ? "Sign In" : "Sign Up"}
                </Button>

                <p className="text-white mt-4">
                  {isLoginEnabled ? "New to Netflix? " : "Already on Netflix? "}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() => {
                      handleReset();
                      toggleIsLoginEnabled();
                    }}
                  >
                    {isLoginEnabled ? "Sign up now." : "Sign in now."}
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
