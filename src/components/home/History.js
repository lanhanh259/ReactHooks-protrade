import React, { useState } from 'react'
import clsx from 'clsx'

const list = [
	{ id: 1, name: 'Bước giá', active: true },
	{ id: 2, name: 'Lịch sử khớp lệnh', active: false },
]
export default function History() {
	const [active, setActive] = useState(1)

	return (
		<>
			<div
				id="history"
				className="flex-grow-1 flex-shrink-1 m-1 txt-white bag-second"
				style={{ height: '55%' }}
			>
				<div
					className="d-flex align-items-center text-center "
					style={{ height: '42px', borderBottom: '1px solid #444' }}
				>
					<div className="flex-grow-1 fs-6 fw-700">VN30F2201</div>
					<div className="flex-grow-1">
						<span>Sàn: </span>
						<br />
						<span className="txt-blue">1412.7</span>
					</div>
					<div className="flex-grow-1">
						<span>TC: </span>
						<br />
						<span className="txt-yellow">1519.0</span>
					</div>
					<div className="flex-grow-1">
						<span>Trần: </span>
						<br />
						<span className="txt-purple">1625.3</span>
					</div>
					<div></div>
				</div>

				<div>
					<div className="d-flex text-center lh-30">
						{list.map((item) => (
							<span
								key={item.id}
								role="button"
								className={clsx('flex-grow-1', 'fw-700', {
									active: item.id === active,
								})}
								onClick={() => setActive(item.id)}
							>
								{item.name}
							</span>
						))}
					</div>
					{active === 1 ? (
						<div>
							<div className="d-flex text-center bag-third lh-30">
								<div className="width-25 txt-ccc">KL Mua</div>
								<div className="width-25 txt-ccc">Giá Mua</div>
								<div className="width-25 txt-ccc be-444">Giá Bán</div>
								<div className="width-25 txt-ccc">KL Bán</div>
							</div>
							<div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
								<div className=" d-flex text-center bb-444 lh-27 ">
									<div className="width-25 ">28</div>
									<div className="width-25 txt-green ">1512.5</div>
									<div className="width-25 txt-green be-444">1512.9</div>
									<div className="width-25 ">5</div>
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className=" d-flex text-center bag-third lh-30">
								<div className="be-444 width-20">TG</div>
								<div className="be-444 width-20">Giá</div>
								<div className="be-444 width-20">+/-</div>
								<div className="be-444 width-20">KL</div>
								<div className="be-444 width-20">KL tích lũy</div>
							</div>
							<div
								className="derivative-info-row-price overflow-auto"
								style={{ height: '240px', width: 'calc(100% + 10px)' }}
							>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
								<div className=" d-flex text-center lh-27">
									<div className="be-444 width-20">14:45:19</div>
									<div className="be-444 width-20 txt-red">1512.5</div>
									<div className="be-444 width-20">4.5</div>
									<div className="be-444 width-20">3,548</div>
									<div className="be-444 width-20">113,617</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
