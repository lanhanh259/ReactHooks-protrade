import React from 'react'
import styled from 'styled-components'
import { CodeInput, PriceInput, WeightInput } from './input'

export default function NormalOrder() {
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

			<div className="row m-b-8 ">
				<label htmlFor="" className="col-4 m-auto">
					Giá đặt:
				</label>
				<Container className="col-8 position-relative">
					<PriceInput />
				</Container>
			</div>

			<div className="row m-b-8">
				<label htmlFor="" className="col-4 m-auto">
					Khối lượng:
				</label>

				<Container className="col-8 position-relative">
					<WeightInput />
				</Container>
			</div>
		</form>
	)
}
const Container = styled.div`
	.tooltip-arrow::after {
		content: '';
		display: block;
		border-width: 8px 10px;
		border-style: solid;
		border-color: transparent transparent #555 transparent;
		position: absolute;
		z-index: 100000;
		top: -42%;
		left: 15%;

		// background-color: red;
	}
`
