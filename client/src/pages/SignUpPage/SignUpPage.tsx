import React from "react";

const SignUpPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleOnChangeEmail = (e: any) => {
        setEmail(e.target.value);
    }
    const handleOnChangePassword = (e: any) => {
        setPassword(e.target.value);
    }
    const handleSubmitSignUpForm = (e: any) => {
        e.preventDefault();
        console.log('email: ', email);
        console.log('password: ', password);
    }
    return (
        <div>
            <form className="formStyle" onSubmit={handleSubmitSignUpForm}>
                <label>
                    Email
                </label>
                <br />
                <input
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
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleOnChangePassword}
                />
                <br />
                <input type="submit" value="Sign up"/>
            </form>
        </div>
    );
};

export default SignUpPage;