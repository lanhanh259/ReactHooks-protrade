import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { getMapping } from '../../../../apis/api'
import { chartActiveState } from '../../../../recoil/atom/chartState'

export default function CodeInput() {
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const [codeValue, setCodevalue] = useState('VN30F2201')
	const setChartActive = useSetRecoilState(chartActiveState)

	const dropdownInput = useRef(null)

	const {
		data: mappingData,
		status,
		isLoading,
		error,
	} = useQuery('mappingData', getMapping)

	const dropDownList = mappingData?.data?.data?.hits.map(
		(item) => item?._source
	)

	const handleChangeCodeValue = (value) => {
		setCodevalue(value)
		setChartActive(value)
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

	if (isLoading) return 'Loading...'
	if (error) return 'An error has occurred: ' + error.message
	return (
		<>
			{status === 'success' && (
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
						className="position-absolute rounded-bottom overflow-auto"
						style={{
							top: '80%',
							zIndex: '100',
							height: '120px',
							width: 'calc(100% + 10px)',
						}}
					>
						{isDropdownActive &&
							dropDownList
								.filter((item) => item?.code.includes('VN30F220'))
								.map((item) => (
									<div
										key={item.id}
										role="button"
										className="dropdown-item bag-white txt-main lh-30 text-start"
										style={{ padding: '0 5px', fontSize: '11px' }}
										onClick={() => handleChangeCodeValue(item.code)}
									>
										{item.code}
									</div>
								))}
					</div>
				</div>
			)}
		</>
	)
}
