import React from 'react'
import { useState } from 'react'

const radioList = [
	{ id: 1, name: 'Lệnh thường' },
	{ id: 2, name: 'Lệnh Stop' },
	{ id: 3, name: 'Lệnh trailing' },
	{ id: 4, name: 'Lệnh OSO' },
]

const PlaceOrder = () => {
	const [checked, setChecked] = useState(2)

	const Radio = () => {
		return (
			<div className="d-flex justify-content-around">
				{radioList.map((item) => (
					<label key={item.id}>
						<input
							type="radio"
							value={item.name}
							checked={checked === item.id}
							onChange={() => setChecked(item.id)}
						/>
						<span>{item.name}</span>
					</label>
				))}
			</div>
		)
	}
	return (
		<div
			id="placeorder"
			className="bag-second m-1"
			style={{ minHeigh: '200px', padding: '20px 0 40px 0' }}
		>
			<Radio />
			{checked === 1 && (
				<form className="p-12">
					<div className="row m-b-8">
						<label htmlFor="" className="col-4 m-auto">
							Mã HĐTL:{' '}
						</label>
						<div className="col-8">
							<input
								className="form-input-control text-dark"
								value="VN30F2201"
								id=""
								placeholder="Mã"
							/>
						</div>
					</div>
					<div className="row m-b-8">
						<label htmlFor="" className="col-4 m-auto">
							Giá đặt:{' '}
						</label>
						<div className="col-8">
							<input
								type="text"
								className="form-input-control text-dark"
								placeholder="Giá"
							/>
						</div>
					</div>
					<div className="row m-b-8">
						<label htmlFor="" className="col-4 m-auto">
							Khối lượng:
						</label>
						<div className="col-8">
							<input
								type="text"
								className="form-input-control text-dark"
								placeholder="KL"
							/>
						</div>
					</div>
				</form>
			)}

			{checked === 2 && (
				<form className="p-12">
					<div className="row m-b-8">
						<label htmlFor="" className="col-4 m-auto">
							Mã HĐTL:
						</label>
						<div className="col-8">
							<input
								className="form-input-control text-dark"
								value="VN30F2201"
								placeholder="Mã"
							/>
						</div>
					</div>

					<div className="row m-b-8">
						<label className="col-4 m-auto">Giá đặt:</label>
						<div className="col-8">
							<input
								className="form-input-control text-dark"
								value=""
								placeholder="Giá"
							/>
						</div>
					</div>

					<div className="row m-b-8 ">
						<label className="col-4 m-auto">Khối lượng:</label>
						<div className="col-8">
							<input
								className="form-input-control text-dark"
								value=""
								placeholder="KL"
							/>
						</div>
					</div>

					<div className="row m-b-8 align-items-center">
						<label className="col-4">Khi giá khớp:</label>
						<div className="col-8 d-flex">
							<div className="d-flex">
								<div className="btn-price-match  btn-active p-8">&#8804;</div>
								<div className="btn-price-match  p-8 m-x-8">&#8805;</div>
							</div>

							<input
								style={{ minWidth: 'auto' }}
								className="form-input-control text-dark"
								value=""
								placeholder="Giá kích hoạt"
							/>
						</div>
					</div>

					<div className="row m-b-8">
						<label className="col-4 m-auto">Ngày hết hạn:</label>
						<div className="col-8">
							<input
								className="form-input-control text-dark"
								value=""
								placeholder=""
							/>
						</div>
					</div>
				</form>
			)}

			<div className="d-flex justify-content-around align-items-center">
				<div>
					<div
						className="btn fw-700 txt-white p-y-4"
						style={{ backgroundColor: 'green', minWidth: '110px' }}
					>
						MUA
					</div>
					<div
						className="btn fw-700 bag-red txt-white p-y-4 m-x-8"
						style={{ minWidth: '110px' }}
					>
						BÁN
					</div>
				</div>
				{checked === 1 && (
					<div className=" align-self-center" style={{ fontSize: '14px' }}>
						<input
							className=""
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label className="p-x-8" htmlFor="flexCheckDefault">
							Lưu lệnh
						</label>
					</div>
				)}
			</div>
		</div>
	)
}

export default PlaceOrder
