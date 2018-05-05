import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.location.state
        };
    }

	render() {
		return (
			<div className="col-md-9">
                <div className="row">
                    <div className="col-md-5">
                        <form action="#">
                            <h4>Infomação Pessoal</h4>
                            <div className="form-group form-group-icon-left"><i className="fa fa-user input-icon"></i>
                                <label>First Name</label>
                                <input className="form-control" defaultValue={this.state.user.firstName} type="text" />
                            </div>
                            <div className="form-group form-group-icon-left"><i className="fa fa-user input-icon"></i>
                                <label>Last Name</label>
                                <input className="form-control" defaultValue={this.state.user.lastName} type="text" />
                            </div>
                            <div className="form-group form-group-icon-left"><i className="fa fa-envelope input-icon"></i>
                                <label>E-mail</label>
                                <input className="form-control" defaultValue={this.state.user.email} type="text" />
                            </div>
                            <div className="form-group form-group-icon-left"><i className="fa fa-phone input-icon"></i>
                                <label>Phone Number</label>
                                <input className="form-control" defaultValue={this.state.user.phone} type="text" />
                            </div>
                            <div className="gap gap-small"></div>
                            <h4>Location</h4>
                            <div className="form-group form-group-icon-left"><i className="fa fa-plane input-icon"></i>
                                <label>Home Airport</label>
                                <input className="form-control" defaultValue={this.state.user.airport} type="text" />
                            </div>
                            <div className="form-group">
                                <label>Street Address</label>
                                <input className="form-control" defaultValue={this.state.user.street} type="text" />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input className="form-control" defaultValue={this.state.user.city} type="text" />
                            </div>
                            <div className="form-group">
                                <label>State/Province/Region</label>
                                <input className="form-control" defaultValue={this.state.user.state} type="text" />
                            </div>
                            <div className="form-group">
                                <label>ZIP code/Postal code</label>
                                <input className="form-control" defaultValue={this.state.user.zipCode} type="text" />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input className="form-control" defaultValue={this.state.user.country} type="text" />
                            </div>
                            <hr />
                            <input type="submit" className="btn btn-primary" defaultValue="Save Changes" />
                        </form>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <h4>Alterar a Senha</h4>
                        <form>
                            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                                <label>Current Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                                <label>New Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                                <label>New Password Again</label>
                                <input className="form-control" type="password" />
                            </div>
                            <hr />
                            <input className="btn btn-primary" type="submit" defaultValue="Change Password" />
                        </form>
                    </div>
                </div>
            </div>
		)
	}
}

export default Settings;