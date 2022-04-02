import React, { useEffect, useRef, useState } from 'react'

export default function WeightInput() {
	const [isWeightTooltipActive, setisWeightTooltipActive] = useState(true)
	const [inputWeightValue, setinputWeightValue] = useState('')

	const WeightTooltipRef = useRef(null)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutSide)

		return () => {
			document.removeEventListener('mousedown', handleClickOutSide)
		}
	}, [])

	const handleClickOutSide = (e) => {
		if (!WeightTooltipRef?.current?.contains(e.target)) {
			setisWeightTooltipActive(false)
		}
	}

	const WeightTooltip = () => {
		return (
			<>
				<div>
					KL mua tối đa: <span className="txt-orange fw-bold">0</span>
				</div>
				<div style={{ marginLeft: 'auto' }}>
					KL bán tối đa: <span className="txt-orange fw-bold">0</span>
				</div>
			</>
		)
	}
	const handleChangeWeightValueInput = (e) => {
		console.log(!isNaN(+e.target.value))
		if (!isNaN(+e.target.value)) {
			console.log('set')

			setinputWeightValue(e.target.value)
		}
	}

	return (
		<>
			<input
				value={inputWeightValue}
				className="form-input-control text-dark"
				placeholder="KL"
				onClick={() => setisWeightTooltipActive(!isWeightTooltipActive)}
				onChange={handleChangeWeightValueInput}
			/>
			{isWeightTooltipActive && (
				<div
					className="tooltip-arrow d-flex flex-wrap position-absolute end-0  start-0 p-8 m-x-12 rounded"
					style={{
						backgroundColor: '#555',
						top: 'calc(100% + 8px)',
						zIndex: '100',
					}}
					ref={WeightTooltipRef}
				>
					<WeightTooltip />
				</div>
			)}
		</>
	)
}
