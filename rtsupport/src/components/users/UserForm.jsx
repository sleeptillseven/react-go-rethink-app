import React, {Component} from 'react';

class UserForm extends Component {
    onSubmit(event) {
        event.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        ref="userName"
                        type="text"
                        className="form-control"
                        placeholder="Set your name..."
                    />
                </div>
            </form>
        );
    }
}

UserForm.propTypes = {
    setUserName: React.PropTypes.func.isRequired
};

export default UserForm;