import React, { useContext } from "react";
import './LoginPage.css';
import { UserContext } from "../../context/userContext/userContext";
import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import { useHistory } from "react-router-dom";

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
    const { isAuthenticated , changeAuthenticationStatus } = useContext(UserContext);

    React.useEffect(() => {
        if(isAuthenticated) {
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
        //call with email and password
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            password: 'password',
        };
        console.log('Isauth ', isAuthenticated);

        changeAuthenticationStatus(user);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('Isauth ', isAuthenticated);
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
        console.log('firstName: ', firstName);
        console.log('lastName: ', lastName);
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