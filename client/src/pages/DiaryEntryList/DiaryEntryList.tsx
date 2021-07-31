import React from "react";
import { useHistory } from "react-router-dom";

//TODO: will populate this with data form storage/ database
const DiaryEntryList = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.push('/');
    }

    const listItems: any = Object.keys(localStorage).map((key: any) => 
        <li>
            {localStorage.getItem(key)}
        </li>
    );

    return (
        <>
            <h1>Diary entry list</h1>
            <ul>
               {listItems}
            </ul>
            <button onClick={handleBackClick}>
                Go back
            </button>
        </>

    );
};

export default DiaryEntryList;