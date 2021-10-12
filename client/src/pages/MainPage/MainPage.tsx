import React, { useContext } from "react";
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns'
import './MainPage.css';
import { UserContext } from "../../context/userContext/userContext";
import { useHistory } from "react-router";
import CardComponent from "../../components/CardComponent/CardComponent";

const MainPage = () => {
    const { isAuthenticated } = useContext(UserContext);
    const history = useHistory();
    const [textValue, setTextValue] = React.useState('');
    const [displayDiaryTextBox, setDisplayTextBox] = React.useState(false);
    const [diaryEntryClasName, setDiaryEntryClassName] = React.useState('diaryEntryFormStart');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newEntry = {
            id: uuid(),
            date: format(new Date(), 'yyyy-MM-dd hh:mm'),
            text: textValue,
        };
        // Will be sending newEndtry to the BE
        localStorage.setItem(textValue, textValue);
        setTextValue('');
        setDiaryEntryClassName('diaryEntryFormEnd');
        setTimeout(function(){
            setDisplayTextBox(false);
            setDiaryEntryClassName('diaryEntryFormStart');
        }, 1000);
    }

    const handleChangeText = (e: any) => {
        setTextValue(e.target.value);
    }

    const handleBackClick = (e: any) => {
        e.preventDefault();
        setTextValue('');
        setDiaryEntryClassName('diaryEntryFormEnd');
        setTimeout(function(){
            setDisplayTextBox(false);
            setDiaryEntryClassName('diaryEntryFormStart');
        }, 1000);
    }

    const handleAddNewEntryClick = () => {
        setDisplayTextBox(!displayDiaryTextBox);
    }
    const handleViewRecordClick = () => {
        history.push('/list');
    }

    React.useEffect(() => {
        if(!isAuthenticated) history.push('/login');
    }, []);

    return (
        <>
            <h1>Time to talk about your day</h1>
            {!displayDiaryTextBox &&
                <>
                    <CardComponent 
                        handleClick={handleViewRecordClick}
                        backgroundImmage={'https://media.giphy.com/media/DPH2d2WQsvTVEDVa2p/giphy.gif'}
                        cardTitle="See previous entries"
                        position={'left'}
                    />
                    <CardComponent
                        handleClick={handleAddNewEntryClick}
                        backgroundImmage={'https://media.giphy.com/media/3oKIPaGG4PDQgQDFZe/giphy.gif'}
                        cardTitle="Talk about today"
                        position={'right'}
                    />
                </>}
            {displayDiaryTextBox &&
                <form className={diaryEntryClasName} onSubmit={handleSubmit}>
                    <textarea
                        className="textBox"
                        id="textValue"
                        name="textValue"
                        placeholder="Start typing..."
                        value={textValue}
                        onChange={handleChangeText}
                    />
                    <br />
                    <button className="submitButton" type="submit">Submit</button>
                    <br />
                    <button className="backButton" onClick={handleBackClick}>Back</button>
                </form>
            }       
        </>
    );
};

export default MainPage;