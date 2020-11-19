import React from "react";

const Quote = (props) => {
    return (
        <section>
            <p id="text">{props.text}</p>
            <p id="author">{props.author}</p>
        </section>
    );
};

export default Quote;
