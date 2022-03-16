import React from 'react'

const Market = () => {
	return (
		<div>
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
			</div>
		</div>
	)
}

export default Market
