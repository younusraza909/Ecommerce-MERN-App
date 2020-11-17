import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

// import for bootstrap
import {Container} from "react-bootstrap";

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
