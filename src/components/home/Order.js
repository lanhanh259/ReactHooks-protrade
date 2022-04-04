import React from 'react'
import { useRecoilValue } from 'recoil'
import { menuItemActiveState } from '../../recoil/atom/index'
import { Orderbook, Portfolio, Assets } from './menu'

export default function Order() {
	const menuItemActive = useRecoilValue(menuItemActiveState)

	return (
		<>
			{menuItemActive === 1 && <Orderbook />}
			{menuItemActive === 2 && <Portfolio />}
			{menuItemActive === 3 && <Assets />}
		</>
	)
}
