import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isDisplayState } from '../../../recoil/atom'
import { menuHeaderActiveState } from '../../../recoil/atom/headerState'

export default function Assets() {
	const [isDisplay, setIsDisplay] = useRecoilState(isDisplayState)
	const setMenuHeaderActive = useSetRecoilState(menuHeaderActiveState)

	const navigate = useNavigate()

	return (
		<div id="orderbook" className=" m-1 bag-second flex-grow-1">
			<div className="d-flex  lh-40 p-x-12 bag-third">
				<div role="button" className=" active flex-grow-1 text-start">
					Thông tin tài sản
				</div>

				<div>
					<i role="button" className="fas fa-sync-alt txt-orange  fw-bold"></i>
					<i
						role="button"
						className="fas fa-external-link p-x-12 txt-orange fw-bold"
						onClick={() => {
							setMenuHeaderActive('tai-san')
							navigate('/tai-san')
						}}
					></i>
					<i
						role="button"
						className="fas fa-minus txt-orange fw-bold"
						onClick={() => setIsDisplay(!isDisplay)}
					></i>
				</div>
			</div>

			<div className="">
				<div className="bb1-444 lh-30 text-start p-x-12 ">
					Tài sản ròng
					<span className="float-end">40,000,000</span>
				</div>
				<div className="bb1-444 lh-30 text-start p-x-12">
					Số dư ký quỹ
					<span className="float-end">24,000,000</span>
				</div>
				<div className="bb1-444 lh-30 text-start p-x-12">
					Thuế và phí
					<span className="float-end">0</span>
				</div>
			</div>
		</div>
	)
}
