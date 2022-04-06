import React from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { getMapping } from '../../apis/api'
import { chartActiveState } from '../../recoil/atom/chartState'

const Watchlist = () => {
	const {
		data: mappingData,
		isLoading,
		error,
	} = useQuery('mapping', getMapping)

	const setChartActive = useSetRecoilState(chartActiveState)

	const handleClick = (deriCode) => {
		setChartActive(deriCode)
	}

	if (isLoading) return 'Loading...'
	if (error) return 'An error has occurred: ' + error.message
	return (
		<div id="watchlist" className="m-1 bag-second" style={{ height: '45%' }}>
			<table className="w-100 text-center">
				<colgroup>
					<col width="25%" />
					<col width="18%" />
					<col width="16%" />
					<col width="16%" />
					<col width="25%" />
				</colgroup>
				<thead className="bag-third">
					<tr>
						<td>Mã</td>
						<td>Giá</td>
						<td>
							<i className="fas fa-caret-left"></i>
							+/-
							<i className="fas fa-caret-right"></i>
						</td>
						<td>Lệch</td>
						<td>Tổng KL</td>
					</tr>
				</thead>
				<tbody>
					{mappingData?.data?.data?.hits
						.filter((item) => item?._source.code.includes('VN30F220'))
						.map((item, index) => (
							<tr key={index}>
								<td
									role="button"
									className="txt-green"
									onClick={() => handleClick(item._source.deriCode)}
								>
									{item?._source.code}
								</td>
								<td className="txt-green">1,508</td>
								<td className="txt-green">-4.5</td>
								<td className="txt-green">3.88</td>
								<td>125,182</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default Watchlist
