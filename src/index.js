import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import CartMain from './components/Pages/Cart/CartMain';
import Product from './components/Pages/Product/Product';
import Man from './components/Pages/Man/man'
import Women from './components/Pages/Women/women'
import Sales from './components/Pages/Sales/sales'


const routing = (
	<Router>
    <Provider store={store}>
		<React.StrictMode>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/App" component={App} />
				<Route exact path="/Man" component={Man} />
				<Route exact path="/Women" component={Women} />
				<Route exact path="/Sales" component={Sales} />
				<Route exact path="/Cart" component={CartMain} />
				<Route exact path="/Product/:productId" component={Product} />
			</Switch>
		</React.StrictMode>
		</Provider>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
