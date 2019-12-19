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
                    <nav className="session-header">
                    <div className="session-logo">
                        <img src={window.logoURL} />
                    </div>
                    <h3>Welcome to MyPin!</h3>
                    <h4>Find new ideas to try</h4>
                    </nav>
                    <br />

                    
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    <div className="session-errors">{this.renderErrors()}</div>
                    <div className="session-form">
                        <br/>

                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Username"
                            className="session-input"
                        />
                   
                    <br/>
                         <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                            className="session-input"
                        />
                        <div className="session-btn">
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                        </div>
                    </div>
                    <small>By continuing, you agree to have fun and get creative</small>
                    {/* <div className="session-form-bottom">
                        Please {this.props.formType} or {this.props.navLink}
                    </div> */}
                </form>
            </div>
        );
    }
}

export default SessionForm;
