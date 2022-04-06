import clsx from 'clsx'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CodeInput } from './input'

const btnList = [{ id: 1 }, { id: 2 }]

const Calendar = () => {
	const [startDate, setStartDate] = useState(new Date())

	return (
		<DatePicker
			className="form-input-control text-dark"
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			includeDates={[new Date()]}
		/>
	)
}

export default function StopOrder() {
	const [active, setActive] = useState(1)
	const [bidPriceValue, setBidPricevalue] = useState('')
	const [weightValue, setWeightValue] = useState('')
	const [triggerPriceValue, setTriggerPricevalue] = useState('')

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
				<label className="col-4 m-auto">Giá đặt:</label>
				<div className="col-8 position-relative z-10">
					<input
						className="form-input-control text-dark"
						value={bidPriceValue}
						placeholder="Giá"
						onChange={(e) => setBidPricevalue(e.target.value)}
					/>
				</div>
			</div>

			<div className="row m-b-8 ">
				<label className="col-4 m-auto">Khối lượng:</label>
				<div className="col-8 position-relative z-10">
					<input
						className="form-input-control text-dark"
						value={weightValue}
						placeholder="KL"
						onChange={(e) => setWeightValue(e.target.value)}
					/>
				</div>
			</div>

			<div className="row m-b-8 align-items-center">
				<label className="col-4">Khi giá khớp:</label>
				<div className="col-8 position-relative z-10 d-flex">
					{btnList.map((item) => (
						<div key={item.id} className="d-flex">
							<div
								role="button"
								className={clsx(
									'btn-price-match p-x-12 d-flex align-items-center mr-4 ',
									{
										'btn-active': item.id === active,
									}
								)}
								onClick={() => setActive(item.id)}
							>
								{item.id === 1 && <span>&#8804;</span>}
								{item.id === 2 && <span>&#8805;</span>}
							</div>
						</div>
					))}

					<input
						style={{ minWidth: 'auto' }}
						className="form-input-control text-dark"
						value={triggerPriceValue}
						placeholder="Giá kích hoạt"
						onChange={(e) => setTriggerPricevalue(e.target.value)}
					/>
				</div>
			</div>

			<div className="row m-b-8">
				<label className="col-4 m-auto">Ngày hết hạn:</label>
				<div className="col-8 ">
					<Calendar />
				</div>
			</div>
		</form>
	)
}
