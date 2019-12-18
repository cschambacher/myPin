import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // this.props.processForm(user);
        this.props.processForm(user);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i)=>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // console.log(this.props);
        return (
            <div className="session-form-container">
                
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    Welcome to MyPin!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="session-form">
                        <br/>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            className="session-input"
                        />
                    </label>
                    <br/>
                    <label>Email:
                    <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            className="session-input"
                        />
                    </label>
                    <br/>
                    <label>Password:
                         <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            className="session-input"
                        />
                            <input className="session-submit" type="submit" value={this.props.formType}/>
                    </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
