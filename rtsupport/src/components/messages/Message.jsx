import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component {
    render() {
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'DD.MM.YY HH:mm');

        return (
            <li className="message">
                <div className="author">
                    <strong>{message.author}</strong>
                    <em className="timestamp">{createdAt}</em>
                </div>
                <div className="body">{message.body}</div>
            </li>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
};

export default Message;