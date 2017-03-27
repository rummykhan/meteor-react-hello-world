import React, {Component} from 'react';


class ChangePassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                old: '',
                password: ''
            }
        }
    }

    handleChange(e) {
        e.preventDefault();
        const {formData} = this.state;

        formData[e.target.name] = e.target.value;

        this.setState({formData});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {formData} = this.state;

        Accounts.changePassword(formData.old, formData.new, (response) => {
            console.log(response);
        });
    }


    render() {
        const {formData} = this.state;
        return (
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">

                    <div className="panel panel-default">
                        <div className="panel-heading">Change Password</div>
                        <div className="panel-body">

                            <div className="form-group">
                                <label htmlFor="">Old password</label>
                                <input type="password" name="old" className="form-control" value={formData.old}
                                       onChange={this.handleChange.bind(this)}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">New Password</label>
                                <input type="password" name="password" className="form-control"
                                       value={formData.password}
                                       onChange={this.handleChange.bind(this)}/>
                            </div>

                            <div className="form-group">
                                <input type="button" value="Change Password" onClick={this.handleSubmit.bind(this)}
                                       className="btn btn-primary btn-sm"/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ChangePassword;