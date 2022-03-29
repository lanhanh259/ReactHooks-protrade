import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getMapping } from '../../apis/api'
import { mappingState } from '../../recoil/atom/watchlistState'

const Watchlist = () => {
	const { data: mappingData, status } = useQuery('mappingData', getMapping)

	const [mapping, setMapping] = useRecoilState(mappingState)

	useEffect(() => {
		const newMapping = mappingData?.data?.data?.hits
			? [...mappingData.data.data.hits]
			: []

		const _newMapping = mapping ? [...mapping, ...newMapping] : newMapping
		setMapping(_newMapping)
	}, [mappingData])

	return (
		<>
			{status === 'success' && Array.isArray(mapping) && (
				<div
					id="watchlist"
					className="m-1 bag-second"
					style={{ height: '45%' }}
				>
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
							{mapping.map((item, index) => (
								<tr key={index}>
									<td role="button" className="txt-green" onClick={() => {}}>
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
			)}
		</>
	)
}

export default Watchlist
