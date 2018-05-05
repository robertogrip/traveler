import React from 'react';
import {Link} from 'react-router';

class Promotion extends React.Component {
	render() {
		return (
			<div className="bg-holder">
	            <div className="bg-mask"></div>
	            <div className="bg-img" style={{backgroundImage: 'url(http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/hotel_porto_bay_liberdade_2048x1293.jpg)'}}></div>
	            <div className="bg-content">
	                <div className="container">
	                    <div className="gap gap-big text-center text-white">
	                        <h2 className="text-uc mb20">Promoção de ultima hora</h2>
	                        <ul className="icon-list list-inline-block mb0 last-minute-rating">
	                            <li><i className="fa fa-star"></i>
	                            </li>
	                            <li><i className="fa fa-star"></i>
	                            </li>
	                            <li><i className="fa fa-star"></i>
	                            </li>
	                            <li><i className="fa fa-star"></i>
	                            </li>
	                            <li><i className="fa fa-star"></i>
	                            </li>
	                        </ul>
	                        <h5 className="last-minute-title">The Peninsula - New York</h5>
	                        <p className="last-minute-date">Sex 14 Mar - Dom 16 Mar</p>
	                        <p className="mb20"><b>R$240</b> / pessoa</p><Link className="btn btn-lg btn-white btn-ghost" to="#">Ver agora <i className="fa fa-angle-right"></i></Link>
	                    </div>
	                </div>
	            </div>
	        </div>
		)
	}
}

export default Promotion;