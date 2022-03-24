import React from 'react'

const OrderBook = () => {
	return (
		<div id="orderbook" className="flex-grow-1 m-1 bag-second">
			<div className="row lh-40 p-x-12">
				<div className="col active">
					<a className="active" href="">
						Lệnh trong ngày
					</a>
				</div>
				<div className="col">
					<a href="">Lệnh điều kiện</a>
				</div>
				<div className="col-auto">
					<i className="fas fa-sync-alt txt-orange p-x-12 fw-bold"></i>
					<i className="fas fa-minus txt-orange fw-bold"></i>
				</div>
			</div>
			<div>
				<div
					className="d-flex text-center bag-third lh-30"
					style={{ height: '42px', borderTop: '1px solid #444' }}
				>
					<div className="flex-grow-1">Lệnh</div>
					<div className="flex-grow-1">Mã</div>
					<div className="flex-grow-1">KL Khớp</div>
					<div className="flex-grow-1">Giá</div>
					<div className="flex-grow-1">TT</div>
				</div>
				<div>
					<div className="text-center p-16 text-secondary fs-6">
						Chưa có lệnh nào trong sổ lệnh
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderBook
