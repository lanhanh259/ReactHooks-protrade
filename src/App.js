import './App.css'
import Chart from './components/home/Chart'
import Market from './components/home/Market'
import History from './components/home/History'
import Watchlist from './components/home/Watchlist'
import OrderBook from './components/home/OrderBook'
import PlaceOrder from './components/home/PlaceOrder'
import Header from './components/layout/header'

function App() {
	return (
		<div className="App">
			<Header />

			<div id="app">
				<div
					className="home d-flex bag-primary"
					style={{ height: 'calc(100vh - 44px)' }}
				>
					<div className="d-flex flex-column flex-grow-1 flex-shrink-1 bag-second">
						<Chart />
						<Market />
					</div>

					<div
						className="d-flex flex-column flex-grow-1"
						style={{ width: '350px' }}
					>
						<History />
						<Watchlist />
					</div>
					<div
						className="d-flex flex-column flex-grow-1"
						style={{ maxWidth: '400px' }}
					>
						<OrderBook />
						<PlaceOrder />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
