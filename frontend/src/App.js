import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import {BrowserRouter as Router, Route} from "react-router-dom";

// import for bootstrap
import {Container} from "react-bootstrap";

function App() {
	return (
		<Router>
			<>
				<Header />
				<main className='py-3'>
					<Container>
						<Route path='/login' component={LoginScreen} />
						<Route path='/payment' component={PaymentMethodScreen} />
						<Route path='/placeorder' component={PlaceOrderScreen} />
						<Route path='/register' component={RegisterScreen} />
						<Route path='/profile' component={ProfileScreen} />
						<Route path='/product/:id' component={ProductScreen} />
						<Route path='/shipping' component={ShippingScreen} />
						{/* ? make it optional to have id to go to cart page */}
						<Route path='/cart/:id?' component={CartScreen} />
						<Route path='/' component={HomeScreen} exact />
					</Container>
				</main>
				<Footer />
			</>
		</Router>
	);
}

export default App;
