import React from 'react'

const Market = () => {
	return (
		<div
			id="market"
			className="d-flex flex-column position-relative m-1 bag-second"
			style={{ height: '45%' }}
		>
			<div className="flex-grow-1 w-100 p-x-4">
				<iframe
					src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&amp;height=280"
					title="Chart"
					style={{ height: '100%', width: '100%' }}
				></iframe>
			</div>
			<div className="market__menus position-absolute start-0 end-0 bottom-0 bag-main d-flex lh-30 justify-content-end">
				<div role="button" className="active  p-x-12 cursor-pointer ">
					VN30 INTRADAY
				</div>
				<div role="button" className=" p-x-12 cursor-pointer">
					VN30
				</div>
				<div>
					<i
						role="button"
						className="fa fa-bar-chart p-x-12 cursor-pointer"
					></i>
				</div>
				<div>
					<i
						role="button"
						className="fa fa-pie-chart p-x-12 cursor-pointer"
					></i>
				</div>
			</div>
		</div>
	)
}

export default Market
