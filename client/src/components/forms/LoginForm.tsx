import React from "react";
import './Form.css';

interface LoginFormProps {
    handleLogin: (email: string, password: string) => void;
}

const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleOnChangeEmail = (e: any) => {
        setEmail(e.target.value);
    }
    const handleOnChangePassword = (e: any) => {
        setPassword(e.target.value);
    }
    const handleSubmitLoginForm = (e: any) => {
        e.preventDefault();
        props.handleLogin(email, password);
    }

    return (
        <form className="formStyle" onSubmit={handleSubmitLoginForm}>
                <label>
                    Email
                </label>
                <br />
                <input
                    className="inputStyle"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleOnChangeEmail}
                />
 
                <br />
                <label>
                    Password
                </label>
                <br />
                <input
                    className="inputStyle"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleOnChangePassword}
                />
                <br />
                <input className="submitButton" type="submit" value="Login"/>
            </form>
    )
}

export default LoginForm;