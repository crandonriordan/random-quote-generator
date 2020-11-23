import React from "react";
import twitterLogo from "../style/Twitter_Social_Icon_Rounded_Square_White.svg";

const Tweet = (props) => {
    let styles = {
        filter: "brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6)",
        minWidth: "48px",
        maxWidth: "5%",
        paddingTop: "30px"
    };

    let intentToTweet =
        "https://twitter.com/intent/tweet?text=" + encodeURI(props.text);
    return (
        <div id="tweet-quote">
            <a className="twitter-share-button" href={intentToTweet}>
                <img style={styles} src={twitterLogo} alt="Twitter Icon" />
            </a>
        </div>
    );
};

export default Tweet;
