import React, { useContext } from "react";
import { UserContext } from "../../context/userContext/userContext";
import { useHistory } from "react-router-dom";
import './NavBarComponent.css';

const NavBarComponent = () => {
    const { user } = useContext(UserContext);
    const [showLogout, setShowLogout] = React.useState(!!user);
    const history = useHistory();
    const handleNameClick = () => {
        setShowLogout(!showLogout);
    }
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload()
        history.push('/login')
    }
    return (
        <div className="nav">
            {user && <p className="userInfo" onClick={() => handleNameClick()}>
                {user.firstName + ' ' + user.lastName}
            </p>}

            {showLogout && <div className="logoutBox">
                <div className="arrow-up"></div>
                <ul className="logoutOptions">
                    <li className="logoutOption">
                        <a href="#" onClick={() => handleLogOut()}>Log out</a>
                    </li>
                    <li className="logoutOption">
                        <a href="#">Your info</a>
                    </li>
                    <li className="logoutOption">
                        <a href="#">Contact</a>
                    </li>
                    <li className="logoutOption">
                        <a href="#">Go premium</a>
                    </li>
                    <li className="logoutOption">
                        <a href="#">Other resources</a>
                    </li>
                </ul>
            </div>}
        </div>
    )
};

export default NavBarComponent;