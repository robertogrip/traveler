import React from 'react';

class Overview extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

	render() {
		return (
			<div className="col-md-9">
                <h4>Total viajado</h4>
                <ul className="list list-inline user-profile-statictics mb30">
                    <li><i className="fa fa-dashboard user-profile-statictics-icon"></i>
                        <h5>12540</h5>
                        <p>Milhas</p>
                    </li>
                    <li><i className="fa fa-globe user-profile-statictics-icon"></i>
                        <h5>2%</h5>
                        <p>Mundo</p>
                    </li>
                    <li><i className="fa fa-building-o user-profile-statictics-icon"></i>
                        <h5>15</h5>
                        <p>Cidades</p>
                    </li>
                    <li><i className="fa fa-flag-o user-profile-statictics-icon"></i>
                        <h5>3</h5>
                        <p>Países</p>
                    </li>
                    <li><i className="fa fa-plane user-profile-statictics-icon"></i>
                        <h5>20</h5>
                        <p>Vôos</p>
                    </li>
                </ul>
                <div id="map-canvas" style={{Width:'100%', Height:'400px'}}></div>
            </div>
		)
	}
}

export default Overview;