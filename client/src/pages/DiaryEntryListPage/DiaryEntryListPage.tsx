import axios from "axios";
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
    const [showButton, setShowButton] = React.useState(false);
    const { isAuthenticated, user } = useContext(UserContext);
    const [entryList, setEntryList] = React.useState();
    React.useEffect(() => {
        if (!isAuthenticated) history.push('/login');
    }, []);

    React.useEffect(() => {
        if (user) {
            const { id } = user;
            const body = JSON.stringify({ id });
            axios.post(
                '/entry/entrylist',
                body,
                {
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((response) => {
                    setEntryList(response.data.entries)
                })
                .catch((e) => {
                    //TODO SHARE ERROR 
                    console.log(e);
                })
        }

    }, [user]);
    React.useEffect(() => {
        console.log('test');
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                console.log('first');
                setShowButton(true);
            } else {
                console.log('second');
                setShowButton(false);
            }
        });
    }, []);

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <h1>Diary entry list</h1>
            <div className="list">
                {
                    entryList && Object.values(entryList as any).map((entry: any, key) =>
                        <div key={key} className="listItem">
                            <p>{entry.text}</p>
                        </div>
                    )
                }
            </div>

            {showButton && <button onClick={handleBackToTopClick} className="backToTopButton">Back to top</button>}

            <button className="backButtonToMainPage" onClick={handleBackClick}>
                Go back
            </button>
        </>

    );
};

export default DiaryEntryListPage;