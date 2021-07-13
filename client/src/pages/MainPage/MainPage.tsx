import React from "react";
import { v4 as uuid } from 'uuid';
import './MainPage.css';

const MainPage = () => {
    const [textValue, setTextValue] = React.useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newEntry = {
            id: uuid(),
            date: new Date(),
            text: textValue,
        };
        // Will be sending newEndtry to the BE
        localStorage.setItem('entry', textValue);
        setTextValue('');
    }
    const handleChangeText = (e: any) => {
        setTextValue(e.target.value);
    }
    return (
        <>
            <h1>Time to talk about your day</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textBox"
                    id="textValue"
                    name="textValue"
                    placeholder="Start typing..."
                    value={textValue}
                    onChange={handleChangeText}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default MainPage;