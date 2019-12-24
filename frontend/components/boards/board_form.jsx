import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(formData);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    // handleFile(e){
    //     debugger;
    //     this.setState({ photoFile: e.currentTarget.files[0] })
    // }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <label>
                        Private
                        <input
                            value={this.state.decription}
                            onChange={this.update('private')}
                        />
                    </label>
                    <button className="board-submit" type='submit' value={this.props.formType} />
                    
                </form>
            </div>
        );
    }
}

export default BoardForm;
