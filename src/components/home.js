import React from 'react';
import {Link} from 'react-router';

//components import
import Promotion from './promotion';
import TopDestinations from './topDestinations';

class Home extends React.Component {
	render() {
		return (
			<div>
		        <div className="top-area show-onload">
		            <div className="bg-holder full">
		                <div className="bg-front full-height bg-front-mob-rel">
		                    <div className="container full-height">
		                        <div className="rel full-height">
		                            <div className="tagline visible-lg" id="tagline"><span>É tempo de</span>
		                                <ul>
		                                    <li>viver</li>
		                                    <li>se divertir</li>
		                                    <li>relaxar</li>
		                                    <li>se perder</li>
		                                    <li className="active">descobrir</li>
		                                    <li>meditar</li>
		                                    <li>sair por ai</li>
		                                    <li>ir</li>
		                                    <li>explorar</li>
		                                    <li>fazer amizades</li>
		                                </ul>
		                            </div>
		                            <div className="search-tabs search-tabs-bg search-tabs-bottom mb50">
		                                <div className="tabbable">
		                                    <ul className="nav nav-tabs" id="myTab">
		                                        <li className="active">
		                                        	<a href="#tab-plane" data-toggle="tab"><i className="fa fa-plane"></i> <span >Viagens</span></a>
		                                        </li>
		                                    </ul>
		                                    <div className="tab-content">
		                                        <div className="tab-pane fade in active" id="tab-plane">
		                                            <h2>Procure por Viagens</h2>
		                                            <form>
		                                                <div className="row">
		                                                    <div className="col-md-8">
		                                                        <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
		                                                            <label>Aonde você quer ir?</label>
		                                                            <input className="typeahead form-control" placeholder="Cidade, Aeroporto, Ponto de Interesse ou País" type="text" />
		                                                        </div>
		                                                    </div>
		                                                    <div className="col-md-4">
		                                                        <div className="input-daterange" data-date-format="M d, D">
		                                                            <div className="row">
		                                                                <div className="col-md-6">
		                                                                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
		                                                                        <label>De</label>
		                                                                        <input className="form-control" name="start" type="text" />
		                                                                    </div>
		                                                                </div>
		                                                                <div className="col-md-6">
		                                                                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
		                                                                        <label>Para</label>
		                                                                        <input className="form-control" name="end" type="text" />
		                                                                    </div>
		                                                                </div>
		                                                            </div>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                                <button className="btn btn-primary btn-lg" type="submit">Procurar</button>
		                                            </form>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="owl-carousel owl-slider owl-carousel-area visible-lg" id="owl-carousel-slider" data-nav="false">
		                    <div className="bg-holder full">
		                        <div className="bg-mask"></div>
		                        <div className="bg-img" style={{backgroundImage: 'url(http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/196_365_2048x1365.jpg)'}}></div>
		                    </div>
		                    <div className="bg-holder full">
		                        <div className="bg-mask"></div>
		                        <div className="bg-img" style={{backgroundImage: 'url(http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/el_inevitable_paso_del_tiempo_2048x2048.jpg)'}}></div>
		                    </div>
		                    <div className="bg-holder full">
		                        <div className="bg-mask"></div>
		                        <div className="bg-img" style={{backgroundImage: 'url(http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/viva_las_vegas_2048x1365.jpg)'}}></div>
		                    </div>
		                </div>
		                <div className="bg-img hidden-lg" style={{backgroundImage: 'url(http://remtsoy.com/tf_templates/traveler/demo_v1_7/img/196_365_2048x1365.jpg)'}}></div>
		                <div className="bg-mask hidden-lg"></div>
		            </div>
		        </div>

		        <div className="gap"></div>


		        <div className="container">
		            <div className="row">
		                <div className="col-md-10 col-md-offset-1">
		                    <div className="row row-wrap" data-gutter="120">
		                        <div className="col-md-4">
		                            <div className="thumb">
		                                <header className="thumb-header"><i className="fa fa-briefcase box-icon-black round box-icon-big animate-icon-top-to-bottom"></i>
		                                </header>
		                                <div className="thumb-caption">
		                                    <h5 className="thumb-title"><Link className="text-darken" to="#">Combine & Save</Link></h5>
		                                    <p className="thumb-desc">Risus quisque egestas venenatis potenti lobortis senectus tellus sodales commodo</p>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="thumb">
		                                <header className="thumb-header"><i className="fa fa-thumbs-o-up box-icon-black round box-icon-big animate-icon-top-to-bottom"></i>
		                                </header>
		                                <div className="thumb-caption">
		                                    <h5 className="thumb-title"><Link className="text-darken" to="#">Best Travel Agent</Link></h5>
		                                    <p className="thumb-desc">Montes dictumst tortor a suspendisse accumsan blandit adipiscing proin ut</p>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="thumb">
		                                <header className="thumb-header"><i className="fa fa-send box-icon-black round box-icon-big animate-icon-top-to-bottom"></i>
		                                </header>
		                                <div className="thumb-caption">
		                                    <h5 className="thumb-title"><Link className="text-darken" to="#">Best Destinations</Link></h5>
		                                    <p className="thumb-desc">Cubilia malesuada odio aptent est etiam mollis velit dictumst posuere</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="gap gap-small"></div>
		        </div>
		        <Promotion />
		        <TopDestinations />
		    </div>
		)
	}
}

export default Home;