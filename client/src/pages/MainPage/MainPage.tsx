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
    }
    const handleChangeText = (e: any) => {
        setTextValue(e.target.value);
    }

    React.useEffect(() => {
        if(!isAuthenticated) history.push('/login');
    }, []);

    return (
        <>
            <h1>Time to talk about your day</h1>
            <CardComponent backgroundImmage={'https://media.giphy.com/media/3ohhwiLhofr9l6zzkQ/giphy.gif'} cardTitle="Title" position={'left'}/>
            <CardComponent backgroundImmage={'https://media.giphy.com/media/3ohhwiLhofr9l6zzkQ/giphy.gif'} cardTitle="Title" position={'right'}/>
            {/* <form onSubmit={handleSubmit}>
                <textarea
                    className="textBox"
                    id="textValue"
                    name="textValue"
                    placeholder="Start typing..."
                    value={textValue}
                    onChange={handleChangeText}
                />
                <br />
                <button type="submit">Submit</button>
            </form> */}
        </>
    );
};

export default MainPage;