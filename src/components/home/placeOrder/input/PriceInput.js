import { useRef, useEffect, useState } from 'react'

const priceList = [
	{
		id: 1,
		name: 'ATO',
	},
	{
		id: 2,
		name: 'ATC',
	},
	{
		id: 3,
		name: 'MTL',
	},
	{
		id: 4,
		name: 'MOK',
	},
	{
		id: 5,
		name: 'MAK',
	},
]

export default function PriceInput() {
	const [inputPriceValue, setinputPriceValue] = useState('')
	const [isPriceTooltipActive, setisPriceTooltipActive] = useState(false)

	const PriceTooltipRef = useRef(null)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutSide)

		return () => {
			document.removeEventListener('mousedown', handleClickOutSide)
		}
	}, [])

	const PriceTooltip = () => {
		return (
			<>
				{priceList.map((item) => (
					<div
						key={item.id}
						className="border rounded p-y-4 p-x-8 m-x-4 txt-ccc"
						role="button"
						onClick={() => {
							setinputPriceValue(item.name)
							setisPriceTooltipActive(false)
						}}
					>
						{item.name}
					</div>
				))}
			</>
		)
	}

	const handleClickOutSide = (e) => {
		if (!PriceTooltipRef?.current?.contains(e.target)) {
			setisPriceTooltipActive(false)
		}
	}

	return (
		<>
			<input
				value={inputPriceValue}
				className="form-input-control text-dark"
				placeholder="Giá"
				onClick={() => setisPriceTooltipActive(!isPriceTooltipActive)}
				onChange={(e) => setinputPriceValue(e.target.value)}
			/>
			{isPriceTooltipActive && (
				<div
					ref={PriceTooltipRef}
					className="tooltip-arrow d-flex position-absolute end-0 p-4 m-x-12 rounded"
					style={{
						backgroundColor: '#555',
						top: 'calc(100% + 8px)',
						zIndex: '100',
					}}
				>
					<PriceTooltip />
				</div>
			)}
		</>
	)
}
