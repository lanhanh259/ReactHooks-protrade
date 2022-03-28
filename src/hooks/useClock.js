import moment from 'moment'
import { useEffect, useState } from 'react'

export default function useClock() {
	const [date, setDate] = useState(moment().format('YYYY/MM/DD'))
	const [time, setTime] = useState(moment().format('HH:mm:ss'))

	useEffect(() => {
		const _timer = setInterval(() => {
			setTime(() => moment().format('HH:mm:ss '))
		}, 1000)

		return () => {
			clearInterval(_timer)
		}
	}, [])

	useEffect(() => {
		const _date = setInterval(() => {
			setDate(() => moment().format('YYYY/MM/DD'))
		}, 1000)

		return () => {
			clearInterval(_date)
		}
	}, [])

	return { date, time }
}
