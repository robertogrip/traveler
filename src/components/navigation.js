import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
            <header id="main-header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Link className="logo" to="/">
                                    <img src="/img/logo-invert.png" alt="" title="Image Title" />
                                </Link>
                            </div>
                            <div className="col-md-3 col-md-offset-2">
                                <form className="main-header-search">
                                    <div className="form-group form-group-icon-left">
                                        <i className="fa fa-search input-icon"></i>
                                        <input typ="text" className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <div className="top-user-area clearfix">
                                    <ul className="top-user-area-list list list-horizontal list-border">
                                        <li className="top-user-area-avatar">
                                            <Link to={{pathname: '/profile', state: this.props.user}}>
                                                <img className="origin round" src={this.props.user.image} alt="" title="AMaze" />Olá, {this.props.user.firstName}
                                            </Link>
                                        </li>
                                        <li><Link to="#" onClick={this.props.click}>Deslogar</Link>
                                        </li>
                                        <li className="nav-drop"><Link to="#">{this.props.user.config.currency}<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i></Link>
                                            <ul className="list nav-drop-menu">
                                                <li><Link to="#">EUR<span className="right">€</span></Link>
                                                </li>
                                                <li><Link to="#">GBP<span className="right">£</span></Link>
                                                </li>
                                                <li><Link to="#">JPY<span className="right">円</span></Link>
                                                </li>
                                                <li><Link to="#">CAD<span className="right">$</span></Link>
                                                </li>
                                                <li><Link to="#">AUD<span className="right">A$</span></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="top-user-area-lang nav-drop">
                                            <a href="#changeLanguage">
                                                <img src="img/flags/32/br.png" alt="" title="Image Title" />{this.props.language}<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i>
                                            </a>
                                            <ul className="list nav-drop-menu">
                                                <li>
                                                    <Link title="German" to="#">
                                                        <img src="img/flags/32/de.png" alt="" title="Image Title" /><span className="right">GER</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link title="Japanise" to="#">
                                                        <img src="img/flags/32/jp.png" alt="" title="Image Title" /><span className="right">JAP</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link title="Italian" to="#">
                                                        <img src="img/flags/32/it.png" alt="" title="Image Title" /><span className="right">ITA</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link title="French" to="#">
                                                        <img src="img/flags/32/fr.png" alt="" title="Image Title" /><span className="right">FRE</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link title="Russian" to="#">
                                                        <img src="img/flags/32/ru.png" alt="" title="Image Title" /><span className="right">RUS</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link title="Korean" to="#">
                                                        <img src="img/flags/32/kr.png" alt="" title="Image Title" /><span className="right">KOR</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="nav">
                        <ul className="slimmenu" id="slimmenu">
                            <li className="active"><a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index.html">Default</a>
                                    </li>
                                    <li><a href="index-1.html">Layout 1</a>
                                    </li>
                                    <li><a href="index-2.html">Layout 2</a>
                                    </li>
                                    <li><a href="index-3.html">Layout 3</a>
                                    </li>
                                    <li><a href="index-4.html">Layout 4</a>
                                    </li>
                                    <li><a href="index-5.html">Layout 5</a>
                                    </li>
                                    <li><a href="index-6.html">Layout 6</a>
                                    </li>
                                    <li className="active"><a href="index-7.html">Layout 7</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="success-payment.html">Pages</a>
                                <ul>
                                    <li><a href="success-payment.html">Success Payment</a>
                                    </li>
                                    <li><a href="user-profile.html">User Profile</a>
                                        <ul>
                                            <li><a href="user-profile.html">Overview</a>
                                            </li>
                                            <li><a href="user-profile-settings.html">Settings</a>
                                            </li>
                                            <li><a href="user-profile-photos.html">Photos</a>
                                            </li>
                                            <li><a href="user-profile-booking-history.html">Booking History</a>
                                            </li>
                                            <li><a href="user-profile-cards.html">Cards</a>
                                            </li>
                                            <li><a href="user-profile-wishlist.html">Wishlist</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Sidebar Right</a>
                                            </li>
                                            <li><a href="blog-sidebar-left.html">Sidebar Left</a>
                                            </li>
                                            <li><a href="blog-full-width.html">Full Width</a>
                                            </li>
                                            <li><a href="blog-post.html">Post</a>
                                                <ul>
                                                    <li><a href="blog-post.html">Sidebar Right</a>
                                                    </li>
                                                    <li><a href="blog-post-sidebar-left.html">Sidebar Left</a>
                                                    </li>
                                                    <li><a href="blog-post-full-width.html">Full Width</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="404.html">404 page</a>
                                    </li>
                                    <li><a href="contact-us.html">Contact Us</a>
                                    </li>
                                    <li><a href="about.html">About</a>
                                    </li>
                                    <li><a href="login-register.html">Login/Register</a>
                                        <ul>
                                            <li><a href="login-register.html">Full Page</a>
                                            </li>
                                            <li><a href="login-register-normal.html">Normal</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="loading.html">Loading</a>
                                    </li>
                                    <li><a href="comming-soon.html">Comming Soon</a>
                                    </li>
                                    <li><a href="gallery.html">Gallery</a>
                                        <ul>
                                            <li><a href="gallery.html">4 Columns</a>
                                            </li>
                                            <li><a href="gallery-3-col.html">3 columns</a>
                                            </li>
                                            <li><a href="gallery-2-col.html">2 columns</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="page-full-width.html">Full Width</a>
                                    </li>
                                    <li><a href="page-sidebar-right.html">Sidebar Right</a>
                                    </li>
                                    <li><a href="page-sidebar-left.html">Sidebar Left</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="feature-typography.html">Features</a>
                                <ul>
                                    <li><a href="feature-typography.html">Typography</a>
                                    </li>
                                    <li><a href="feature-icons.html">Icons</a>
                                    </li>
                                    <li><a href="feature-forms.html">Forms</a>
                                    </li>
                                    <li><a href="feature-icon-effects.html">Icon Effects</a>
                                    </li>
                                    <li><a href="feature-elements.html">Elements</a>
                                    </li>
                                    <li><a href="feature-grid.html">Grid</a>
                                    </li>
                                    <li><a href="feature-hovers.html">Hover effects</a>
                                    </li>
                                    <li><a href="feature-lightbox.html">Lightbox</a>
                                    </li>
                                    <li><a href="feature-media.html">Media</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="hotels.html">Hotels</a>
                                <ul>
                                    <li><a href="hotel-details.html">Details</a>
                                        <ul>
                                            <li><a href="hotel-details.html">Layout 1</a>
                                            </li>
                                            <li><a href="hotel-details-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="hotel-details-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="hotel-details-4.html">Layout 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="hotel-payment.html">Payment</a>
                                        <ul>
                                            <li><a href="hotel-payment.html">Registered</a>
                                            </li>
                                            <li><a href="hotel-payment-registered-card.html">Existed Cards</a>
                                            </li>
                                            <li><a href="hotel-payment-unregistered.html">Unregistered</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="hotel-search.html">Search</a>
                                        <ul>
                                            <li><a href="hotel-search.html">Layout 1</a>
                                            </li>
                                            <li><a href="hotel-search-2.html">Layout 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="hotels.html">Results</a>
                                        <ul>
                                            <li><a href="hotels.html">Layout 1</a>
                                            </li>
                                            <li><a href="hotels-search-results-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="hotels-search-results-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="hotels-search-results-4.html">Layout 4</a>
                                            </li>
                                            <li><a href="hotel-search-results-5.html">Layout 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="flights.html">Flights</a>
                                <ul>
                                    <li><a href="flight-payment.html">Payment</a>
                                        <ul>
                                            <li><a href="flight-payment.html">Registered</a>
                                            </li>
                                            <li><a href="flight-payment-registered-card.html">Existed Cards</a>
                                            </li>
                                            <li><a href="flight-payment-unregistered.html">Unregistered</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="flight-search.html">Search</a>
                                        <ul>
                                            <li><a href="flight-search.html">Layout 1</a>
                                            </li>
                                            <li><a href="flight-search-2.html">Layout 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="flights.html">List</a>
                                        <ul>
                                            <li><a href="flights.html">Layout 1</a>
                                            </li>
                                            <li><a href="flights-search-results-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="flights-search-results-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="flights-search-results-4.html">Layout 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="rentals.html">Rentals</a>
                                <ul>
                                    <li><a href="rentals-details.html">Details</a>
                                        <ul>
                                            <li><a href="rentals-details.html">Layout 1</a>
                                            </li>
                                            <li><a href="rentals-details-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="rentals-details-3.html">Layout 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="rental-payment.html">Payment</a>
                                        <ul>
                                            <li><a href="rental-payment.html">Registered</a>
                                            </li>
                                            <li><a href="rental-payment-registered-card.html">Existed Cards</a>
                                            </li>
                                            <li><a href="rental-payment-unregistered.html">Unregistered</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="rentals-search.html">Search</a>
                                        <ul>
                                            <li><a href="rentals-search.html">Layout 1</a>
                                            </li>
                                            <li><a href="rentals-search-2.html">Layout 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="rentals.html">Results</a>
                                        <ul>
                                            <li><a href="rentals.html">Layout 1</a>
                                            </li>
                                            <li><a href="rentals-search-results-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="rentals-search-results-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="rentals-search-results-4.html">Layout 4</a>
                                            </li>
                                            <li><a href="rentals-search-results-5.html">Layout 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="cars.html">Cars</a>
                                <ul>
                                    <li><a href="car-details.html">Details</a>
                                    </li>
                                    <li><a href="car-payment.html">Payment</a>
                                        <ul>
                                            <li><a href="car-payment.html">Registered</a>
                                            </li>
                                            <li><a href="car-payment-registered-card.html">Existed Cards</a>
                                            </li>
                                            <li><a href="car-payment-unregistered.html">Unregistered</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="car-search.html">Search</a>
                                        <ul>
                                            <li><a href="car-search.html">Layout 1</a>
                                            </li>
                                            <li><a href="car-search-2.html">Layout 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="cars.html">Results</a>
                                        <ul>
                                            <li><a href="cars.html">Layout 1</a>
                                            </li>
                                            <li><a href="cars-results-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="cars-results-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="cars-results-4.html">Layout 4</a>
                                            </li>
                                            <li><a href="cars-results-5.html">Layout 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="activities.html">Activities</a>
                                <ul>
                                    <li><a href="activitiy-details.html">Details</a>
                                        <ul>
                                            <li><a href="activitiy-details.html">Layout 1</a>
                                            </li>
                                            <li><a href="activitiy-details-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="activitiy-details-3.html">Layout 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="activity-search.html">Search</a>
                                        <ul>
                                            <li><a href="activity-search.html">Layout 1</a>
                                            </li>
                                            <li><a href="activity-search-2.html">Layout 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="activitiy-payment.html">Payment</a>
                                        <ul>
                                            <li><a href="activitiy-payment.html">Registered</a>
                                            </li>
                                            <li><a href="activity-payment-registered-card.html">Existed Cards</a>
                                            </li>
                                            <li><a href="activitiy-payment-unregistered.html">Unregistered</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="activities.html">Results</a>
                                        <ul>
                                            <li><a href="activities.html">Layout 1</a>
                                            </li>
                                            <li><a href="activities-search-results-2.html">Layout 2</a>
                                            </li>
                                            <li><a href="activities-search-results-3.html">Layout 3</a>
                                            </li>
                                            <li><a href="activities-search-results-4.html">Layout 4</a>
                                            </li>
                                            <li><a href="activities-search-results-5.html">Layout 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
};

export default Navigation;