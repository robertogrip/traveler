import React from 'react';
//import {Link} from 'react-router';

//components import
import Promotion from './promotion';
import TopDestinations from './topDestinations';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<Promotion />
				<TopDestinations />
			</div>
		)
	}
}

export default Profile;