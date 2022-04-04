import clsx from 'clsx'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
	Chart,
	History,
	Market,
	Order,
	PlaceOrder,
	Watchlist,
} from '../components/home'
import { isDisplayState, menuItemActiveState } from '../recoil/atom'

const menuList = [
	{ id: 1, name: 'Sổ lệnh' },
	{ id: 2, name: 'Danh mục' },
	{ id: 3, name: 'Tài sản' },
]

export default function HomePage() {
	const isDisplay = useRecoilValue(isDisplayState)
	const [menuItemActive, setMenuItemActive] =
		useRecoilState(menuItemActiveState)

	console.log('menuItemActive', menuItemActive)
	return (
		<div id="app">
			<div
				className="home d-flex bag-main"
				style={{ height: 'calc(100vh - 44px)' }}
			>
				<div
					className="d-flex flex-column flex-grow-1 flex-shrink-1 bag-second"
					style={{ minWidth: '270px' }}
				>
					<Chart />
					<Market />
				</div>

				<div
					className="d-flex flex-column flex-grow-1"
					style={{ maxWidth: '350px', minWidth: '350px' }}
				>
					<History />
					<Watchlist />
				</div>

				{isDisplay && (
					<div
						className="d-flex flex-column flex-grow-1"
						style={{ maxWidth: '400px', minWidth: '400px' }}
					>
						<Order />
						<PlaceOrder />
						<div className="menu d-flex">
							{menuList.map((item) => (
								<div
									key={item.id}
									role="button"
									// className="lh-30 cursor-pointer active flex-grow-1"
									className={clsx('lh-30 cursor-pointer flex-grow-1', {
										active: item.id === menuItemActive,
									})}
									onClick={() => setMenuItemActive(item.id)}
								>
									{item.name}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<footer
				className="lh-30 footer-asset position-fixed bottom-0  start-0 end-0 bag-main "
				style={{ maxWidth: '400px', fontSize: '12px' }}
			>
				<span style={{ color: '#777' }}>
					Bản quyền thuộc về VNDIRECT ©2021 . v 2.2.2
				</span>
			</footer>
		</div>
	)
}
