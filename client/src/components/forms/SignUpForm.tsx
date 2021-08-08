import React from "react";
import './Form.css';

interface SignUpFormProps {
    handleSignUp: (firstName: string, lastName: string, email: string, password: string) => void;
}

const SignUpForm = (props: SignUpFormProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const handleOnChangeEmail = (e: any) => {
        setEmail(e.target.value);
    }
    const handleOnChangePassword = (e: any) => {
        setPassword(e.target.value);
    }
    const handleOnChangeFirstName = (e: any) => {
        setFirstName(e.target.value);
    }
    const handleOnChangeLastName = (e: any) => {
        setLastName(e.target.value);
    }
    const handleSubmitSignUpForm = (e: any) => {
        e.preventDefault();
        props.handleSignUp(firstName, lastName, email, password);
    }

    return (
        <form className="formStyle" onSubmit={handleSubmitSignUpForm}>
            <label>
                First name
            </label>
            <br />
            <input
                className="inputStyle"
                type="text"
                placeholder="John"
                name="firstName"
                value={firstName}
                onChange={handleOnChangeFirstName}
            />
            <br />
            <label>
                Last name
            </label>
            <br />
            <input
                className="inputStyle"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={lastName}
                onChange={handleOnChangeLastName}
            />
            <br />
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
            <input className="submitButton" type="submit" value="SignUp" />
        </form>
    )
}

export default SignUpForm;