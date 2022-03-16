import React from 'react'

const Watchlist = () => {
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
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
					<tr>
						<td className="txt-green">VN30F2201</td>
						<td className="txt-green">1,508</td>
						<td className="txt-green">-4.5</td>
						<td className="txt-green">3.88</td>
						<td>125,182</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Watchlist
