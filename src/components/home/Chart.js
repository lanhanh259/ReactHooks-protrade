import React from 'react'

const Chart = () => {
	return (
		<>
			<div id="chart" className="flex-grow-1 flex-shrink-1 m-1">
				<iframe
					className="bag-orange"
					src="https://dchart.vndirect.com.vn/?theme=dark&timeframe=1&disableSyncSymbol=true&symbol=VN30F1M&domain=https://protrade-trial.vndirect.com.vn&t=function%20now()%20{%20[native%20code]%20}"
					title="Chart"
					style={{ height: '100%', width: '100%' }}
				></iframe>
			</div>
		</>
	)
}

export default Chart
