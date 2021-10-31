import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'

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
    const [entryElement, setEntryElement] = React.useState() as any;
    const [entryAnimation, setEntryAnimation] = React.useState('');
    const dateOptions: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

    const handleViewEntryClick = (entryId: string) => {
        axios.post(
            `/entry/${entryId}`,
            {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => {
                setEntryElement(response.data.entry);
                setEntryAnimation('diaryEntryViewFromStart');
            })
            .catch((e) => {
                //TODO SHARE ERROR 
                console.log(e);
            })
    }

    return (
        <div className="diaryEntryContainer">
            <h1>Diary entry list</h1>
             { entryElement && <div className="overlay"></div> }
            <div className="list">
                {
                    entryList && Object.values(entryList as any).map((entry: any, key) =>
                        <>
                            <div key={key} className="listItem">
                                <p>{new Date(entry.post_date).toLocaleDateString("en-US", dateOptions)}</p>
                                <button disabled={entryElement ? true : false} className="diaryEntryButton" onClick={() => handleViewEntryClick(entry._id)}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </>
                    )
                }
            </div>

            {showButton &&
                <button onClick={handleBackToTopClick} className="backToTopButton">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>}

            <button className="backButtonToMainPage" onClick={handleBackClick}>
                Go back
            </button>
            <div className={entryAnimation}>
                <div className="closeModalButtonContainer">
                   <button className="closeModalButton" onClick={() => { setEntryElement(''); setEntryAnimation('diaryEntryViewFromMiddle') }}>
                       X
                    </button>
                </div>
                <p>{entryElement && 'Post from ' + new Date(entryElement.post_date).toLocaleDateString("en-US", dateOptions)}</p>
                <p className="content">{entryElement && entryElement.text}</p>
                {entryElement && <button className="deleteButton">Delete Post</button> }
            </div>
        </div>

    );
};

export default DiaryEntryListPage;