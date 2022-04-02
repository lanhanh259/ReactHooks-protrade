import React, { useState } from 'react'
import styled from 'styled-components'
import NormalOrder from './placeOrder/NormalOrder'
import StopOrder from './placeOrder/StopOrder'

const radioList = [
	{ id: 1, name: 'Lệnh thường' },
	{ id: 2, name: 'Lệnh Stop' },
	{ id: 3, name: 'Lệnh trailing' },
	{ id: 4, name: 'Lệnh OSO' },
]

export default function PlaceOrder() {
	const [checked, setChecked] = useState(1)

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
		<Container
			id="placeorder"
			className="bag-second m-1"
			style={{ minHeigh: '200px', padding: '20px 0 40px 0' }}
		>
			<Radio />
			{checked === 1 && <NormalOrder />}

			{checked === 2 && <StopOrder />}

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
		</Container>
	)
}

const Container = styled.div`
	.dropdown-item:hover {
		background-color: #ccc !important;
	}
`
