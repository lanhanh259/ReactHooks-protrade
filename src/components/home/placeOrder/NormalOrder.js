import React from 'react'
import CodeInput from './CodeInput'

const NormalOrder = () => {
	return (
		<form className="p-12">
			<div className="row m-b-8">
				<label htmlFor="" className="col-4 m-auto">
					Mã HĐTL:
				</label>
				<div className="col-8">
					<CodeInput />
				</div>
			</div>
			<div className="row m-b-8">
				<label htmlFor="" className="col-4 m-auto">
					Giá đặt:
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
	)
}

export default NormalOrder
