import React from 'react';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[photo]', this.state.photoFile);
        this.props.action(formData);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(e){
        // debugger;
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    render() {
        console.log(this.state)
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
                        Description
                        <textarea
                            cols="30"
                            rows="10"
                            value={this.state.decription}
                            onChange={this.update('description')}
                        />
                    </label>
                    <label >Upload a photo
                    <input
                        type="file"
                        onChange={this.handleFile}
                    />
                    </label>
                    <button className="pin-submit" type='submit' value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default PinForm;
