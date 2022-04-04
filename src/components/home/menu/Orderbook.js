import clsx from 'clsx'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { isDisplayState } from '../../../recoil/atom'

const orderBookList = [
	{
		id: 1,
		name: 'Lệnh trong ngày',
	},
	{
		id: 2,
		name: 'Lệnh điều kiện',
	},
]

export default function Orderbook() {
	const [active, setActive] = useState(1)
	const [isDisplay, setIsDisplay] = useRecoilState(isDisplayState)

	return (
		<div id="orderbook" className="flex-grow-1 m-1 bag-second">
			<div className="row lh-40 p-x-12">
				{orderBookList.map((item) => (
					<div
						key={item.id}
						role="button"
						className={clsx('col', { active: item.id === active })}
						onClick={() => setActive(item.id)}
					>
						{item.name}
					</div>
				))}

				<div className="col-auto">
					<i
						role="button"
						className="fas fa-sync-alt txt-orange p-x-12 fw-bold"
					></i>
					<i
						role="button"
						className="fas fa-minus txt-orange fw-bold"
						onClick={() => setIsDisplay(!isDisplay)}
					></i>
				</div>
			</div>

			{active === 1 ? (
				<div>
					<div
						className="d-flex text-center bag-third lh-30"
						style={{ height: '42px', borderTop: '1px solid #444' }}
					>
						<div className="flex-grow-1">Lệnh</div>
						<div className="flex-grow-1">Mã</div>
						<div className="flex-grow-1">KL Khớp</div>
						<div className="flex-grow-1">Giá</div>
						<div className="flex-grow-1">TT</div>
					</div>
					<div>
						<div className="text-center p-16 text-secondary fs-6">
							Chưa có lệnh nào trong sổ lệnh
						</div>
					</div>
				</div>
			) : (
				<div>
					<div
						className="d-flex text-center bag-third lh-30"
						style={{ height: '42px', borderTop: '1px solid #444' }}
					>
						<div className="flex-grow-1">Lệnh</div>
						<div className="flex-grow-1">Mã</div>
						<div className="flex-grow-1">Giá kích hoạt</div>
						<div className="flex-grow-1">KL </div>
						<div className="flex-grow-1">Giá</div>
						<div className="flex-grow-1">Ngày hết hạn</div>
						<div className="flex-grow-1">TT</div>
					</div>
					<div>
						<div className="text-center p-16 text-secondary fs-6">
							Chưa có lệnh nào trong sổ lệnh
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
