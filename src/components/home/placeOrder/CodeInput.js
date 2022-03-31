import React, { useState } from 'react'

const dropDownList = [
	{ id: 1, value: 'VN30F2204' },
	{ id: 2, value: 'VN30F2205' },
	{ id: 3, value: 'VN30F2206' },
	{ id: 4, value: 'VN30F2209' },
]
const CodeInput = () => {
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const [codeValue, setCodevalue] = useState('VN30F2201')

	const handleChangeCodeValue = (value) => {
		setCodevalue(value)
		setIsDropdownActive(false)
	}

	return (
		<div className="position-relative">
			<input
				className="form-input-control text-dark"
				value={codeValue}
				id=""
				placeholder="Mã"
				onClick={() => {
					setCodevalue('')
					setIsDropdownActive(true)
				}}
			/>
			<div
				className="position-absolute overflow-hidden rounded-bottom"
				style={{
					width: '100%',
					top: '80%',
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

export default CodeInput
