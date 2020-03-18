import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        // this.formType = this.props.formType;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const board = Object.assign({}, this.state);
        this.props.action(board)
        .then(data => {
            // console.log("data", data);
            this.props.history.push(`/boards/${data.id}`)
        }).then(this.props.closeModalForm).catch(err => console.log(err));

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    // handleFile(e){
    //     debugger;
    //     this.setState({ photoFile: e.currentTarget.files[0] })
    // }

    render() {
        console.log(this.state)
        return (
            <div className="board-form-container">  
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    <nav className="board-form-header">
                        <h3>{this.props.formType}</h3>
                        <div onClick={this.props.closeModalForm} className="close-x">X</div>
                    </nav>
                    <div className="board-form">
                        <label>
                            Title
                            <input
                                type='text'
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="board-input"
                            />
                        </label>
                        <br/>
                        <label>
                            Private
                            <input
                                // type="checkbox"
                                value={this.state.private}
                                onChange={this.update('private')}
                                className="board-input"
                            />
                        </label>
                        <br/>
                        <input className="board-submit" type='submit' value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default BoardForm;
