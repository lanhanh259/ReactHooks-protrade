import React from 'react'
import {
	ChartHome as Chart,
	HistoryHome as History,
	MarketHome as Market,
	OrderBookHome as OrderBook,
	PlaceOrderHome as PlaceOrder,
	WatchlistHome as Watchlist,
} from '../components/home'

const HomePage = () => {
	return (
		<div id="app">
			<div
				className="home d-flex bag-main"
				style={{ height: 'calc(100vh - 44px)' }}
			>
				<div className="d-flex flex-column flex-grow-1 flex-shrink-1 bag-second">
					<Chart />
					<Market />
				</div>

				<div
					className="d-flex flex-column flex-grow-1"
					style={{ maxWidth: '350px' }}
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
	)
}

export default HomePage
