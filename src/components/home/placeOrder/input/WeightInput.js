import React, { useEffect, useRef, useState } from 'react'

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

export default function WeightInput() {
	const [isWeightTooltipActive, setisWeightTooltipActive] = useState(false)
	const [inputWeightValue, setinputWeightValue] = useState('')

	const WeightInputRef = useRef(null)
	const WeightTooltipRef = useRef(null)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutSide)

		return () => {
			document.removeEventListener('mousedown', handleClickOutSide)
		}
	}, [])

	const handleClickOutSide = (e) => {
		if (
			!WeightInputRef?.current?.contains(e.target) &&
			!WeightTooltipRef?.current?.contains(e.target)
		) {
			setisWeightTooltipActive(false)
		}
	}

	const handleChangeWeightValueInput = (e) => {
		if (!isNaN(+e.target.value)) {
			setinputWeightValue(e.target.value)
		}
	}

	return (
		<>
			<input
				ref={WeightInputRef}
				value={inputWeightValue}
				className="form-input-control text-dark"
				placeholder="KL"
				onClick={() => setisWeightTooltipActive(true)}
				onChange={handleChangeWeightValueInput}
			/>
			{isWeightTooltipActive && (
				<div
					ref={WeightTooltipRef}
					className="tooltip-arrow d-flex flex-wrap position-absolute end-0  start-0 p-8 m-x-12 rounded"
					style={{
						backgroundColor: '#555',
						top: 'calc(100% + 8px)',
						zIndex: '100',
					}}
				>
					<WeightTooltip />
				</div>
			)}
		</>
	)
}
