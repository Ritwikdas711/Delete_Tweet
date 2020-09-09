import React,{Component} from 'react';

import './addTweet.css';

class AddTweet extends Component {
    state = {
        content: '',
        time: ''
    }

    contentChangedHandler = (event) => {
        this.setState({content: event.target.value});
    }

    timeChangedHandler = (event) => {
        this.setState({time: event.target.value});
    }

    render () {
        return (
            <div className="AddTweet">
                <input 
                    type="text" 
                    placeholder="Content" 
                    onChange={this.contentChangedHandler}
                    value={this.state.content} />
                <input 
                    type="time" 
                    placeholder="Time"
                    onChange={this.timeChangedHandler}
                    value={this.state.time} />
                <button onClick={() => this.props.tweetAdded(this.state.content, this.state.time)}>Add tweet</button>
            </div>
        );
    }
}

export default AddTweet;