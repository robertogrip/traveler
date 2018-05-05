import React from 'react';
import {Link} from 'react-router';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: props.location.state
		};
	}

	render() {
		const children = this.props.children;

		return (
			<div>
				<div className="container">
		            <h1 className="page-title">Perfil do Viajante</h1>
		        </div>

		        <div className="container">
		            <div className="row">
		                <div className="col-md-3">
		                    <aside className="user-profile-sidebar">
		                        <div className="user-profile-avatar text-center">
		                            <img src={this.state.user.image} alt="" title="AMaze" />
		                            <h5>{this.state.user.fullName}</h5>
		                            <p>Membro desde 2015</p>
		                        </div>
		                        <ul className="list user-profile-nav">
		                            <li className={ this.props.location.pathname === "/profile" ? 'active' : '' }>
		                            	<Link to={{pathname: '/profile', state: this.state.user}}><i className="fa fa-user"></i>Visão geral</Link>
		                            </li>
		                            <li className={ this.props.location.pathname === "/profile/settings" ? 'active' : '' }>
		                            	<Link to={{pathname: '/profile/settings', state: this.state.user}}><i className="fa fa-cog"></i>Configurações</Link>
		                            </li>
		                            <li>
		                            	<Link to="user-profile-photos.html"><i className="fa fa-camera"></i>Minhas fotos de Viagens</Link>
		                            </li>
		                            <li>
		                            	<Link to="user-profile-booking-history.html"><i className="fa fa-clock-o"></i>Histórico de Reservas</Link>
		                            </li>
		                            <li>
		                            	<Link to="user-profile-cards.html"><i className="fa fa-credit-card"></i>Cartões de Credito/Debito</Link>
		                            </li>
		                            <li>
		                            	<Link to="user-profile-wishlist.html"><i className="fa fa-heart-o"></i>Lista de Desejos</Link>
		                            </li>
		                        </ul>
		                    </aside>
		                </div>

		                { children }
		                
		            </div>
		        </div>
		        <div className="gap"></div>
			</div>
		)
	}
}

export default Profile;