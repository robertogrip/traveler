import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Route, Router, browserHistory} from 'react-router';

//styles import
import './bootstrap.css';
import './font-awesome.css';
import './icomoon.css';
import './app.css';

//components import
import Footer from './components/footer';
import Navigation from './components/navigation';

//page components import
import Home from './components/home';
import Profile from './components/profile';

const App = (props) => {
    const children = props.children;
    const user = {
        firstName: 'Roberto',
        lastName: 'Gripa Filho',
        fullName: 'Roberto Gripa Filho',
        email: 'roberto.gripaf@gmail.com',
        image: 'https://scontent.fbnu3-1.fna.fbcdn.net/v/t1.0-1/c0.20.160.160/p160x160/13012631_1005806789510340_4254276675559444974_n.jpg?_nc_cat=0&oh=a3129c4b3de6554401f6394fe90e43e5&oe=5B503B60',
        config: {
            currency: 'Real R$',
            language: 'BRA'
        }
    };

    return (
        <div className="global-wrap">
            <Navigation user={user} />
            { children }
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App} >
            <Route component={Home} path="/" />
            <Route component={Profile} path="/profile" />
        </Route>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
