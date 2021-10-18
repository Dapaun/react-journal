import React, { useContext } from "react";
import './LoginPage.css';
import { UserContext } from "../../context/userContext/userContext";
import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [isCLicking, setIsClicking] = React.useState(false);
    const [sunAnimations, setSunAnimations] = React.useState('sunGifBefore');
    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [shouldDisplayLogin, setShouldDisplayLogin] = React.useState(true);
    const history = useHistory();
    const { isAuthenticated, changeAuthenticationStatus } = useContext(UserContext);

    React.useEffect(() => {
        if (isAuthenticated) {
            history.push('/main');
        }
    }, [isAuthenticated]);

    React.useEffect(() => {
        if (!isFirstRender) {
            isCLicking ? setSunAnimations('sunGifBefore sunGifActive') : setSunAnimations('sunGifAfter sunGifInactive');
        } else {
            setIsFirstRender(false);
        }
    }, [isCLicking]);

    const handleSubmitLoginForm = (email: string, password: string) => {
        setEmail(email);
        setPassword(password);
        const body = JSON.stringify({ email, password });

        axios.post(
            '/auth',
            body,
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                const user = {
                    id: response.data.user.id,
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    email: response.data.user.email,
                };
                console.log('Before change ', user);
                changeAuthenticationStatus(user);
            })
            .catch((e) => {
                //TODO SHARE ERROR 
                console.log(e);
            })
    }

    const handleSubmitSignUpForm = (
        firstName: string,
        lastName: string,
        email: string,
        password: string) => {
        setEmail(email);
        setPassword(password);
        setFirstName(firstName);
        setLastName(lastName);
        const body = JSON.stringify({firstName, lastName, email, password});
        axios.post(
            '/signUp',
            body,
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                const user = {
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    email: response.data.user.email,
                };
                console.log('Before change ',user);
                // changeAuthenticationStatus(user);
                setShouldDisplayLogin(!shouldDisplayLogin);
            })
            .catch((e) => {
                //TODO SHARE ERROR 
                console.log(e);
            })
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
                <div>
                    <img onClick={() => setIsClicking(!isCLicking)} className={sunAnimations} src="https://media.giphy.com/media/mFSlq2cgOGCnp3jkdo/giphy.gif" alt="" />
                    <p className={isCLicking ? "sunnyMessageHover" : "sunnyMessage"}>Hope you had a sunny day</p>
                </div>
                {shouldDisplayLogin &&
                    <>
                        <LoginForm handleLogin={(email: string, password: string) => {
                            handleSubmitLoginForm(email, password);
                        }} />
                        <a className="signUpParagraph" onClick={() => setShouldDisplayLogin(!shouldDisplayLogin)}>Don't have an account?</a>
                    </>
                }
                {!shouldDisplayLogin &&
                    <>
                        <SignUpForm handleSignUp={(
                            firstName: string,
                            lastName: string,
                            email: string,
                            password: string) => {
                            handleSubmitSignUpForm(firstName, lastName, email, password);
                        }} />
                        <a className="loginParagraph" onClick={() => setShouldDisplayLogin(!shouldDisplayLogin)}>Back to login!</a>

                    </>
                }
            </div>
        </div>
    );
};

export default LoginPage;