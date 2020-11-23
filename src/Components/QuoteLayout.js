import React from "react";
import Quote from "./Quote";
import Tweet from "./Tweet";
import styles from "../style/QuoteLayout.module.css";

class QuoteLayout extends React.Component {
    state = {};

    fetchQuote = () => {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => this.setState(data));
    };

    componentDidMount() {
        this.fetchQuote();
    }

    handleClick = () => {
        this.fetchQuote();
    }

    render() {
        console.log(styles);

        return (
            <div id={styles.quote_box}>
                <Quote author={this.state.author} text={this.state.content} />
                <Tweet author={this.state.author} text={this.state.content} />
                <button className={styles.new_quote} onClick={this.handleClick}>Get New Quote</button>
            </div>
        );
    }
}

export default QuoteLayout;
