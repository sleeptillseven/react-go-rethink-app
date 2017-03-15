import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        };
    }

    addChannel(name) {
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // ToDo: Send to server
    }

    setChannel(activeChannel) {
        this.setState({activeChannel});
        // ToDo: Fetch from Server

    }

    render() {
        return (
            <ChannelSection channels={this.state.channels}
                            setChannel={this.setChannel.bind(this)}
                            addChannel={this.addChannel.bind(this)}/>
        );
    }
}

export default App;