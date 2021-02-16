import React, {useState} from 'react';

import {useForm} from 'react-hook-form';

import {Link} from 'react-router-dom';

import {Helmet} from 'react-helmet';

import {fetchApi} from "../../../utility/components/fetchApi";

import '../styles/register.css';

const Register = () => {

    const [onSubmission, setOnSubmission] = useState(false);

    const [res1, setRes1] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");

    const [waiting, setWaiting] = useState(true);

    const {register, handleSubmit, errors} = useForm();

    const urlLink = 'http://localhost:5000/auth/register/';

    const onSubmit = (data) => {

        const dataObject = {

            EMAIL: data.EMAIL,

            PASSWORD: data.PASSWORD
        };
        setErrorMsg("");

        if (data.PASSWORD === data.PASSWORD2) {
            setOnSubmission(true);
            (async () => {
                const {isError, errorMessage} = await fetchApi(dataObject, "POST", urlLink);
                if (isError) {
                    setWaiting(false);

                    setRes1(false);

                    setOnSubmission(false);

                    setErrorMsg(errorMessage);

                } else {
                    setWaiting(false);

                    setRes1(true);
                }
            })();
        } else {
            setErrorMsg("Passwords did not match.")

        }
    };

    return (
        <> {/* <Preloader /> */}

            <Helmet htmlAttributes>
                <html lang="en"/>

                <title>
                    Union_Bank | Create an Account
                </title>
            </Helmet>
            <div className="animateScreen">
                <section className="authCardDisplay">
                    <h1 className="martln__desktop">
                        Union_Bank
                    </h1>

                    <h3 className="promote__desktop">
                        Save your future with us.
                    </h3>

                    <p className="desc__desktop"></p>
                </section>

                {
                onSubmission && (
                    <div className="auth__over">
                        {
                        waiting && <h5 className="auth__over__msg">Please Kindly Wait A Moment!</h5>
                    }

                        {
                        res1 && <h4 className="auth__over__res1">CONGRATS!</h4>
                    }

                        {
                        res1 && <h5 className="auth__over__res2">Your Account Has Been Created. A Confirmation Link Has Been Sent To Your Email.</h5>
                    }

                        {
                        res1 && <h5 className="auth__over__res2">We are happy that you found interest in our product, would you love to take a short survey and have us your feedback about our idea?
                            <a href="https://cutt.ly/take-martln-survey/">
                                Take Survey here</a>

                        </h5>
                    } </div>
                )
            }

                <section className="authCardRegister">
                    <h1 className="martln__register">
                        Union_Bank
                    </h1>

                    <h3 className="martLn__promote">
                        Save your future with us.
                    </h3>

                    <h1 className="martln__register__desktop">
                        REGISTER
                    </h1>

                    <h3 className="martLn__promote__desktop">Kindly create an account to get started.</h3>
                    <h6 style={
                        {color: "red"}
                    }>
                        {errorMsg}</h6>
                    <form className="formSignin"
                        onSubmit={
                            handleSubmit(onSubmit)
                    }>

                        <div className="form__line__register">
                            <input label="Email"
                                aria-invalid={
                                    errors.EMAIL ? 'true' : 'false'
                                }
                                type="email"
                                name="EMAIL"
                                placeholder="  Email"
                                className="auth__input"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'This Email field is required'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'This Email field must contain atleast 5 characters'
                                        }
                                    })
                                }/> {
                            errors.EMAIL && (
                                <h6 role="alert" className="auth__input__error">
                                    {
                                    errors.EMAIL && Object.values(errors.EMAIL)[1]
                                } </h6>
                            )
                        } </div>

                        <div className="form__line__register">
                            <input aria-invalid={
                                    errors.PASSWORD ? 'true' : 'false'
                                }
                                label="Password"
                                type="password"
                                placeholder="  Password"
                                className="auth__input"
                                name="PASSWORD"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'This Password field is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'This Password field must contain atleast 8 characters'
                                        }
                                    })
                                }/> {
                            errors.PASSWORD && (
                                <h6 role="alert" className="auth__input__error">
                                    {
                                    errors.PASSWORD && Object.values(errors.PASSWORD)[1]
                                } </h6>
                            )
                        } </div>

                        <button className="authBtn__register" type="submit">
                            REGISTER
                        </button>
                    </form>

                    <h6 className="agree">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </h6>

                    <h5 className="accountLink">
                        <Link to="/auth/signin/" className="account__href">
                            Already have an account ? Sign in
                        </Link>
                    </h5>
                </section>
            </div>
        </>
    );
};

export default Register;
