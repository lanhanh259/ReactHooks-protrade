import React from 'react'
import { useRecoilValue } from 'recoil'
import { chartActiveState } from '../../recoil/atom/chartState'

export default function Chart() {
	const chartActive = useRecoilValue(chartActiveState)
	const urlChart = `https://dchart.vndirect.com.vn/?theme=dark&timeframe=1&disableSyncSymbol=true&symbol=${chartActive}&domain=https://protrade-trial.vndirect.com.vn&t=function%20now()%20{%20[native%20code]%20`

	return (
		<>
			{chartActive && (
				<div id="chart" className="flex-grow-1 flex-shrink-1 m-1">
					<iframe
						src={urlChart}
						title="Chart"
						style={{ height: '100%', width: '100%' }}
					></iframe>
				</div>
			)}
		</>
	)
}
