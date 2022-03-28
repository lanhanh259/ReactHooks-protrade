import React from 'react'
import { useRecoilValue } from 'recoil'
import {
	ChartHome as Chart,
	HistoryHome as History,
	MarketHome as Market,
	OrderBookHome as OrderBook,
	PlaceOrderHome as PlaceOrder,
	WatchlistHome as Watchlist,
} from '../components/home'
import { isDisplayState } from '../recoilState'

const HomePage = () => {
	const isDisplay = useRecoilValue(isDisplayState)

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

				{isDisplay && (
					<div
						className="d-flex flex-column flex-grow-1"
						style={{ maxWidth: '400px' }}
					>
						<OrderBook />
						<PlaceOrder />
						<div className="d-flex">
							<div
								role="button"
								className="lh-30 cursor-pointer active flex-grow-1"
							>
								Sổ lệnh
							</div>
							<div role="button" className="lh-30 cs-pointer flex-grow-1">
								Danh mục
							</div>

							<div role="button" className="lh-30 cs-pointer flex-grow-1">
								Tài sản
							</div>
						</div>
					</div>
				)}
			</div>
			<footer
				className="lh-30 footer-asset position-fixed bottom-0  start-0 end-0 bag-main "
				style={{ maxWidth: '400px', fontSize: '12px' }}
			>
				<span style={{ color: '#777' }}>
					Bản quyền thuộc về VNDIRECT ©2021 . v 2.2.2
				</span>
			</footer>
		</div>
	)
}

export default HomePage
