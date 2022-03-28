import React from 'react'
import { useClock } from '../../../hooks'

const Clock = () => {
	const { date, time } = useClock()

	return (
		<div className="d-flex align-items-center  p-x-16 ">
			<span className="flex-shrink-0  fw-700 m-x-8 txt-orange">{time}</span>
			<span className="flex-shrink-0 fw-500 txt-orange">{date}</span>
		</div>
	)
}

export default Clock
