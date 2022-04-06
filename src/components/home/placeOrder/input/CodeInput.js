import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { getMapping } from '../../../../apis/api'
import { chartActiveState } from '../../../../recoil/atom/chartState'

export default function CodeInput() {
	const {
		data: mappingData,
		isLoading,
		error,
	} = useQuery('mappingData', getMapping)
	const [isDropdownActive, setIsDropdownActive] = useState(false)
	const [codeValueInput, setcodeValueInput] = useState('VN30F2201')
	const setChartActive = useSetRecoilState(chartActiveState)

	const codeInputRef = useRef(null)
	const dropdowntRef = useRef(null)

	const dropDownList = mappingData?.data?.data?.hits.map(
		(item) => item?._source
	)

	const handleChangecodeValueInput = (value) => {
		console.log('value', value)

		setcodeValueInput(value)
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
		if (
			!codeInputRef?.current?.contains(event.target) &&
			!dropdowntRef?.current?.contains(event.target)
		) {
			setIsDropdownActive(false) // close dropdown
		}
	}

	if (isLoading) return 'Loading...'
	if (error) return 'An error has occurred: ' + error.message
	return (
		<div className="position-relative">
			<input
				ref={codeInputRef}
				className="form-input-control text-dark"
				value={codeValueInput}
				placeholder="Mã"
				onClick={() => {
					setcodeValueInput('')
					setIsDropdownActive(true)
				}}
				onChange={(e) => {
					setIsDropdownActive(false)
					setcodeValueInput(e.target.value)
				}}
			/>
			<div
				ref={dropdowntRef}
				className={clsx('position-absolute rounded-bottom overflow-auto', {
					'z-100': isDropdownActive,
				})}
				style={{
					top: '80%',
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
								onClick={() => handleChangecodeValueInput(item.code)}
							>
								{item.code}
							</div>
						))}
			</div>
		</div>
	)
}
