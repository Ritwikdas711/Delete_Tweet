import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from '../Tweet/tweet';
import AddTweet from '../addTweet/addTweet';
import * as actionTypes from '../store/actions';

class Tweets extends Component {
    
    render () {
        return (
            <div>
                <AddTweet tweetAdded={this.props.onAddedTweet} />
                {this.props.tws.map(tweet => (
                    <Tweet 
                        key={tweet.id}
                        content={tweet.content} 
                        time={tweet.time} 
                        clicked={() => this.props.onRemovedTweet(tweet.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tws: state.tweets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedTweet: (content, time) => dispatch({type: actionTypes.ADD_TWEET, tweetData: {content: content, time: time}}),
        onRemovedTweet: (id) => dispatch({type: actionTypes.REMOVE_TWEET, tweetId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);