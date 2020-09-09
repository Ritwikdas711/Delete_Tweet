import * as actionTypes from './actions';

const initialState = {
    tweets: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TWEET:
            const newTweet = {
                id: Math.random(), // not really unique but good enough here!
                content: action.tweetData.content,
                time: action.tweetData.time
            }
            return {
                ...state,
                tweets: state.tweets.concat( newTweet )
            }
        case actionTypes.REMOVE_TWEET:
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.tweetId)
            }
    }
    return state;
};

export default reducer;