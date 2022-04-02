import React, { useRef, useState, useEffect } from 'react'

const dropDownList = [
	{ id: 1, value: 'VN30F2204' },
	{ id: 2, value: 'VN30F2205' },
	{ id: 3, value: 'VN30F2206' },
	{ id: 4, value: 'VN30F2209' },
]

export default function CodeInput() {
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const [codeValue, setCodevalue] = useState('VN30F2201')

	const dropdownInput = useRef(null)

	const handleChangeCodeValue = (value) => {
		setCodevalue(value)
		setIsDropdownActive(false)
	}

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleClickOutSide)
		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleClickOutSide)
		}
	}, [])

	const handleClickOutSide = (event) => {
		// click outside
		if (!dropdownInput?.current?.contains(event.target)) {
			setIsDropdownActive(false) // close dropdown
		}
	}

	return (
		<div className="position-relative">
			<input
				className="form-input-control text-dark"
				value={codeValue}
				placeholder="Mã"
				onClick={() => {
					setCodevalue('')
					setIsDropdownActive(true)
				}}
				onChange={(e) => {
					setIsDropdownActive(false)
					setCodevalue(e.target.value)
				}}
			/>
			<div
				ref={dropdownInput}
				className="position-absolute overflow-hidden rounded-bottom"
				style={{
					width: '100%',
					top: '80%',
					zIndex: '100',
				}}
			>
				{isDropdownActive &&
					dropDownList.map((item) => (
						<div
							key={item.id}
							role="button"
							className="dropdown-item bag-white txt-main lh-30 text-start"
							style={{ padding: '0 5px', fontSize: '11px' }}
							onClick={() => handleChangeCodeValue(item.value)}
						>
							{item.value}
						</div>
					))}
			</div>
		</div>
	)
}
