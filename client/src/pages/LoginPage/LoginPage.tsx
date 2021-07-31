import React from "react";
import './LoginPage.css';

const LoginPage = () => {
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
        console.log('email: ', email);
        console.log('password: ', password);
    }

    return (
        <div className="container">
            <div className="leftContainer">
                <p className="firstParagraph">
                    Hello! Thanks for coming by!
                </p>
                <div className="diaryGifContainer">
                    <img className="diaryGif" src="https://media.giphy.com/media/3ohhwiLhofr9l6zzkQ/giphy.gif" alt="" />
                </div>
            </div>
            <div className="rightContainer">
            <img className="sunGif" src=" https://media.giphy.com/media/mFSlq2cgOGCnp3jkdo/giphy.gif" alt="" />

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
            </div>
        </div>
    );
};

export default LoginPage;