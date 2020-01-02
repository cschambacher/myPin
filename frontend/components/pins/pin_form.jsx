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
        this.props.action(formData, this.state.id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(e){
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    render() {
        return (
            <div className="create-edit-form">
                {/* <h3>{this.props.formType}</h3> */}
                <form onSubmit={this.handleSubmit}>
                    <div className="create-edit-form-top">
                    <button className="pin-submit" type='submit'>Save</button>
                    </div>
                    <div className="create-edit-form-left">
                        <label className="photo-upload">
                            <img src={this.state.photoUrl} /> 
                    <input
                        type="file"
                        onChange={this.handleFile}
                        />
                    </label>
                    </div>
                    <div className="create-edit-form-right">
                    <label className="create-edit-form-title">
                        <input
                            type='text'
                            value={this.state.title}
                            placeholder="Add your title"
                            onChange={this.update('title')}
                        />
                    </label>
                    <label className="create-edit-form-description">
                        <textarea
                            cols="30"
                            rows="1"
                            value={this.state.description}
                            placeholder="Tell everyone what your Pin is about"
                            onChange={this.update('description')}
                        />
                    </label>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default PinForm;
