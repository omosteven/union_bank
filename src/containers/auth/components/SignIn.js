import React, {useState} from 'react';

import {useForm} from 'react-hook-form';

import {Link, useHistory} from 'react-router-dom';

import {Helmet} from 'react-helmet';

import {fetchApi} from "../../../utility/components/fetchApi";

import '../styles/signIn.css';

const SignIn = ({userData}) => {
    console.log("test", userData);
    let history = useHistory();

    const [onSubmission, setOnSubmission] = useState(false);

    const [res1, setRes1] = useState(false);

    const [waiting, setWaiting] = useState(true);

    const [errorMsg, setErrorMsg] = useState("");

    const {register, handleSubmit, errors} = useForm();

    const urlLink = 'http://localhost:5000/auth/signin/';

    const onSubmit = (data) => {
        const dataObject = {
            EMAIL: data.EMAIL,

            PASSWORD: data.PASSWORD
        };
        setErrorMsg("");
        setOnSubmission(true);
        (async () => {
            const {isError, data, errorMessage} = await fetchApi(dataObject, "POST", urlLink);
            if (isError) {
                setWaiting(false);

                setRes1(false);

                setOnSubmission(false);

                setErrorMsg(errorMessage);

            } else {
                setWaiting(false);

                setRes1(true);

                sessionStorage.setItem("martlnTOken", data.token);
                setTimeout(() => {
                    history.push("/user/");

                }, (2000))
            }
        })();

    };

    return (
        <>
            <Helmet htmlAttributes>
                <title>
                    Union_Bank | Sign Into Your Account
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
                        res1 && <h4 className="auth__over__res1">
                            Authentication Successful. Redirecting...</h4>
                    } </div>
                )
            }
                <section className="authCard">
                    <h1 className="martln">
                        Union_Bank
                    </h1>
                    <h3 className="martLn__promote">
                        Save your future with us.
                    </h3>
                    <h1 className="martln__signin__desktop">
                        SIGNIN
                    </h1>
                    <h3 className="martLn__promote__desktop">Kindly Sign Into Your Account to Continue</h3>

                    <h6 style={
                        {color: "red"}
                    }>
                        {errorMsg}</h6>
                    <form autoComplete="off" className="formSignin"
                        onSubmit={
                            handleSubmit(onSubmit)
                    }>
                        <div className="form__line">
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
                        <div className="form__line">
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
                        <div className="forgotPassword">
                            <Link to="/auth/forgot-password/" className="forgot">
                                Forgot Password ?
                            </Link>
                        </div>
                        <button className="authBtn__register" type="submit">
                            SIGNIN
                        </button>
                    </form>

                    <h5 className="accountLink">
                        <Link to="/auth/register/" className="account__href">
                            Don 't have an account? Sign Up
                        </Link>
                    </h5>
                </section>
            </div>
        </>
    );
};

export default SignIn;
