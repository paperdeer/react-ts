import React from 'react';

type GreetingsProps = {
    name : string;
    mark : string;
    optionnal? : string;
    onClick:(name : string) => void
};

const Greetings = ({name,mark,optionnal,onClick}:GreetingsProps) => {
    const handleClick = () => onClick(name);
    return(
    <div>
        <div>Hello, {name} {mark}</div>
        {optionnal && <p>{optionnal}</p>}
        <button onClick={handleClick}>Click me</button>
    </div>
    )
}

Greetings.defaultProps = {
    mark : '!'
}
export default Greetings;