import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";
import './DiaryEntryListPage.css';

//TODO: will populate this with data form storage/ database
const DiaryEntryListPage = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.push('/main');
    };

    const { isAuthenticated } = useContext(UserContext);
    React.useEffect(() => {
        if(!isAuthenticated) history.push('/login');
    }, []);

    const listItems: any = Object.keys(localStorage).map((key: any) => 
        <li>
            {localStorage.getItem(key)}
        </li>
    );

    return (
        <>
            <h1>Diary entry list</h1>
            <ul className="list">
               {listItems}
            </ul>
            <button className="backButtonToMainPage" onClick={handleBackClick}>
                Go back
            </button>
        </>

    );
};

export default DiaryEntryListPage;