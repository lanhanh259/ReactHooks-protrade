import React from 'react'

const PlaceOrder = () => {
	return (
		<div
			id="placeorder"
			className="bag-second m-1"
			style={{ minHeigh: '200px', padding: '20px 0 40px 0' }}
		>
			<div className="d-flex justify-content-around">
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						Lệnh thường
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						Lệnh Stop
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						Lệnh trailing
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						Lệnh OSO
					</label>
				</div>
			</div>
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
			<div className="d-flex justify-content-around align-items-center">
				<div
					className="btn fw-700 txt-white p-y-4"
					style={{ backgroundColor: 'green', minWidth: '110px' }}
				>
					MUA
				</div>
				<div
					className="btn fw-700 bag-red txt-white p-y-4"
					style={{ minWidth: '110px' }}
				>
					BÁN
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label className="form-check-label" htmlFor="flexCheckDefault">
						Lưu lệnh
					</label>
				</div>
			</div>
		</div>
	)
}

export default PlaceOrder
