import React, { useState } from 'react'
import clsx from 'clsx'

const chartsList = [
	{ id: 1, name: 'intraday', src: '' },
	{
		id: 2,
		name: 'VN30Charts',
		src: 'https://dchart.vndirect.com.vn/?theme=dark&symbol=VN30&disableSyncSymbol=true&timeframe=1',
	},
	{
		id: 3,
		name: 'columnCharts',
		src: 'https://mkw.vndirect.com.vn/leader_lagger?color=gray&amp;height=280',
	},
	{
		id: 4,
		name: 'percentageChart',
		src: 'https://mkw.vndirect.com.vn/market_cap?color=gray&height=280',
	},
]

export default function Market() {
	const [chartActive, setChartActive] = useState('columnCharts')

	return (
		<div
			id="market"
			className="d-flex flex-column position-relative m-1 bag-second"
			style={{ height: '45%' }}
		>
			<div className="flex-grow-1 w-100 p-x-4">
				{chartsList.map((item) => (
					<>
						{chartActive === item.name && (
							<iframe
								key={item.id}
								src={item.src}
								style={{ height: '100%', width: '100%' }}
							></iframe>
						)}
					</>
				))}
			</div>
			{/* MENU */}
			<div className="market__menus position-absolute start-0 end-0 bottom-0 bag-main d-flex lh-30 justify-content-end">
				<div
					role="button"
					className={clsx(' p-x-12 cursor-pointer', {
						active: chartActive === 'intraday',
					})}
					onClick={() => setChartActive('intraday')}
				>
					VN30 INTRADAY
				</div>
				<div
					role="button"
					className={clsx(' p-x-12 cursor-pointer', {
						active: chartActive === 'VN30Charts',
					})}
					onClick={() => setChartActive('VN30Charts')}
				>
					VN30
				</div>
				<div>
					<i
						role="button"
						className={clsx('fa fa-bar-chart p-x-12 cursor-pointer', {
							active: chartActive === 'columnCharts',
						})}
						onClick={() => setChartActive('columnCharts')}
					></i>
				</div>
				<div>
					<i
						role="button"
						className={clsx('fa fa-pie-chart p-x-12 cursor-pointer', {
							active: chartActive === 'percentageChart',
						})}
						onClick={() => setChartActive('percentageChart')}
					></i>
				</div>
			</div>
		</div>
	)
}
