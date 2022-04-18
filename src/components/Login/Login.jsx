import React from 'react'
import { Box } from '@chakra-ui/react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Styles from "../../Styles";
import {loginThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import '../../App.css'




function Login(props) {

    const navigate = useNavigate();
    if (props.userDataH !== null) {
        navigate('/profile/' + props.userDataH.userId)
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)

        props.loginThunkCreator(values.email, values.password, values.rememberMe)
    }

    return (
        <Styles>
            <Box className={props.loginError ? 'errorLoginBox' : 'loginBox'} mt='70px' text-algin='center' width='50%' margin='70px auto 0'>

                <Form
                onSubmit={onSubmit}
                initialValues={{rememberMe: false}}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
                render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>

                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>Email</label>
                                    <input className={props.loginError ? 'errorInput' : ''} {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}

                                </div>
                            )}
                        </Field>
                        <Field name="rememberMe">
                            {({input, meta}) => (

                                <div>
                                    <label>Remember me</label>
                                    <input type="checkbox" />
                                </div>

                            )}
                        </Field>
                        <div className="buttons">
                            <Button
                                margin='5px 5px 5px 0'
                                size='sm'
                                colorScheme='blue'
                                type="submit" disabled={submitting || pristine}
                            >
                                Log in
                            </Button>
                            <Box display={props.loginError ? 'inline-block' : 'none'} className='errorText'>
                                {props.loginError ? <div>Login Failed</div> : ''}
                            </Box>

                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
            </Box>
        </Styles>
    )
}

let mapStateToProps = (state) => {
    return {
        userDataH: state.auth.userDataH,
        userId: state.auth.userId,
        userLogin: state.auth.userLogin,
        userEmail: state.auth.userEmail,
        loginError: state.auth.loginError
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginThunkCreator: (email, password, rememberMe) => {dispatch(loginThunkCreator(email, password, rememberMe))}
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
