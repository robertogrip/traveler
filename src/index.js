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
import Footer     from './components/footer';
import Navigation from './components/navigation';

//Home import
import Home from './components/home/home';

//Profile import
import Profile  from './components/profile/profile';
import Overview from './components/profile/overview';
import Settings from './components/profile/settings';

class App extends React.Component {
    constructor() {
        super();

        const user = {
            firstName: 'Roberto',
            lastName: 'Gripa Filho',
            fullName: 'Roberto Gripa Filho',
            email: 'roberto.gripaf@gmail.com',
            phone: '+55 48 9 9931 7636',
            airport: 'Hercílio Luz Florianópolis',
            street: 'Rua Antônio Gripa nº 65',
            state: 'Santa Catarina',
            city: 'Tijucas',
            zipCode: '88200-000',
            country: 'Brasil',
            image: 'https://scontent.fbnu3-1.fna.fbcdn.net/v/t1.0-1/c0.20.160.160/p160x160/13012631_1005806789510340_4254276675559444974_n.jpg?_nc_cat=0&oh=a3129c4b3de6554401f6394fe90e43e5&oe=5B503B60',
            config: {
                currency: 'Real R$',
                language: 'pt-br'
            }
        };

        this.state = {
            user: user,
            language: 'pt-br'
        }
    }

    toogleLanguage = (event) => {
        event.preventDefault();

        this.setState({
            user: this.state.user,
            language: this.state.language === 'pt-br' ? 'en-us' : 'pt-br'
        });
    };

    render() {
        const childrenWithProps = React.cloneElement(this.props.children, {state: this.state});

        return (
            <div className="global-wrap">
                <Navigation user={this.state.user} click={this.toogleLanguage} language={this.state.language} />
                {childrenWithProps}
                <Footer user={this.state.user} />
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route component={Home} path="/" />
            <Route component={Profile}>
                <Route component={Overview} path="/profile" />
                <Route component={Settings} path="/profile/settings" />
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
