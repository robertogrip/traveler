import React from 'react';
import {Link} from 'react-router';

class TopDestionations extends React.Component {
	render() {
		return (
	        <div className="container">
	            <div className="gap"></div>
	            <h2 className="text-center">Top Viagens</h2>
	            <div className="gap">
	                <div className="row row-wrap">
	                    <div className="col-md-3">
	                        <div className="thumb">
	                            <header className="thumb-header">
	                                <Link className="hover-img curved" to="#">
	                                    <img src="http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/people_on_the_beach_800x600.jpg" alt="" title="196_365" />
	                                </Link>
	                            </header>
	                            <div className="img-left">
	                                <img src="img/flags/32/fr.png" alt="" title="Image Title" />
	                            </div>
	                            <div className="thumb-caption">
	                                <h4 className="thumb-title"><Link className="text-darken" to="#">Paris</Link></h4>
	                                <div className="thumb-caption">
	                                    <p className="thumb-desc">Nullam potenti ac sagittis iaculis justo</p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-md-3">
	                        <div className="thumb">
	                            <header className="thumb-header">
	                                <Link className="hover-img curved" to="#">
	                                    <img src="http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/196_365_800x600.jpg" alt="" title="El inevitable paso del tiempo" />
	                                </Link>
	                            </header>
	                            <div className="img-left">
	                                <img src="img/flags/32/hu.png" alt="" title="Image Title" />
	                            </div>
	                            <div className="thumb-caption">
	                                <h4 className="thumb-title"><Link className="text-darken" to="#">Budapest</Link></h4>
	                                <div className="thumb-caption">
	                                    <p className="thumb-desc">Sociis interdum sed a senectus porta</p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-md-3">
	                        <div className="thumb">
	                            <header className="thumb-header">
	                                <Link className="hover-img curved" to="#">
	                                    <img src="http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/el_inevitable_paso_del_tiempo_800x600.jpg" alt="" title="Upper Lake in New York Central Park" />
	                                </Link>
	                            </header>
	                            <div className="img-left">
	                                <img src="img/flags/32/us.png" alt="" title="Image Title" />
	                            </div>
	                            <div className="thumb-caption">
	                                <h4 className="thumb-title"><Link className="text-darken" to="#">New York</Link></h4>
	                                <div className="thumb-caption">
	                                    <p className="thumb-desc">Erat ultricies auctor tellus natoque cursus</p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-md-3">
	                        <div className="thumb">
	                            <header className="thumb-header">
	                                <Link className="hover-img curved" to="#">
	                                    <img src="http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/upper_lake_in_new_york_central_park_800x600.jpg" alt="" title="people on the beach" />
	                                </Link>
	                            </header>
	                            <div className="img-left">
	                                <img src="img/flags/32/gr.png" alt="" title="Image Title" />
	                            </div>
	                            <div className="thumb-caption">
	                                <h4 className="thumb-title"><Link className="text-darken" to="#">Crete</Link></h4>
	                                <div className="thumb-caption">
	                                    <p className="thumb-desc">Cursus parturient commodo diam donec est</p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
		)
	}
}

export default TopDestionations;