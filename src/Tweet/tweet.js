import React from 'react';

import './tweet.css';

const Tweet = (props) => (
    <div className="Tweet" onClick={props.clicked}>
        <p>{props.content}</p>
        <p>Time left: {props.time}</p>
    </div>
);

export default Tweet;