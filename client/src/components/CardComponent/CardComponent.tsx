import React from "react";
import './CardComponent.css';

interface CardComponentProps {
    backgroundImmage: string;
    cardTitle: string;
    position: string;
}

const CardComponent = (props: CardComponentProps) => {
    const { backgroundImmage, cardTitle, position } = props;
    const [horizontalPoSition, setHorizontalPosition] = React.useState('');

    React.useEffect(() => {
        if  (position === 'left') {
            setHorizontalPosition('20%');
        } else {
            setHorizontalPosition('70%');
        }
    }, []);
    
    return (
        <div className="cardContainer" style={{left: horizontalPoSition}}>
            <p className="cardTitle">{cardTitle}</p>
            <img className="cardImage" src={backgroundImmage} />
        </div>
    )
};

export default CardComponent;