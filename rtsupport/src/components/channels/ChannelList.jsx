import React, {Component} from 'react';
import Channel from './Channel.jsx';


class ChannelList extends Component {
    render() {
        return (
            <ul>{
                this.props.channels.map(channel => {
                    return (
                        <Channel channel={channel} setChannel={this.props.setChannel} key={channel.id}
                                 name={channel.name}/>);
                })
            }
            </ul>
        );
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
};

export default ChannelList;