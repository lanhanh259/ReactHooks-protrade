import React from 'react'
import { useClock } from '../../../customHooks'
import logo from '../../../statics/img/logo.svg'

const Header = () => {
	const { date, time } = useClock()
	return (
		<div>
			<header className="header bag-main d-flex align-items-center p-x-12">
				<div className="" style={{ height: '38px', width: 'auto' }}>
					<a className="h-100">
						<img
							className="h-100"
							src={logo}
							alt="logo"
							style={{ verticalAlign: 'unset' }}
						/>
					</a>
				</div>
				<div className="d-flex align-items-center  p-x-16 ">
					<span className="flex-shrink-0  fw-700 m-x-8 txt-orange">{time}</span>
					<span className="flex-shrink-0 fw-500 txt-orange">{date}</span>
				</div>
				<div className="header__horizontal-menu d-flex">
					<ul className="flex-shrink-0 d-flex ">
						<li>
							<a
								className="active txt-white fw-700 p-x-12 p-y-4 bs-333 border-333"
								href=""
							>
								Trang chủ
							</a>
						</li>
						<li>
							<a
								className="txt-white fw-700 p-x-12 p-y-4 bs-333 border-333"
								href=""
							>
								Tài sản
							</a>
						</li>
						<li>
							<a
								className="txt-white fw-700 p-x-12 p-y-4 bs-333 border-333"
								href=""
							>
								Hướng dẫn
							</a>
						</li>
					</ul>
					<div className="flex-shrink-0">
						<span className="txt-orange">Lãi/Lỗ:</span>
						<span className="txt-yellow">0</span>
					</div>
				</div>
				<div className="header__profitloss-top flex-grow-1 text-center">
					<div
						className=" d-inline rounded p-y-4 p-x-12"
						style={{ backgroundColor: '#97037c' }}
					>
						<a href="">
							<i className="fas fa-trophy p-x-4"></i>
							Top cao thủ phái sinh
						</a>
					</div>
				</div>
				{/* <!-- header: menu --> */}
				<div className="header__menu d-flex justify-content-end align-items-center h-100">
					<div className="flex-shrink-0">
						<span
							className=" border rounded p-y-4 p-x-12 fw-700"
							style={{ borderColor: 'orange!important' }}
						>
							BẢN TRIAL
						</span>
					</div>
					<div className="header__uplevel flex-shrink-0 m-x-12">
						<span className="rounded p-y-4 p-x-12  bag-orange">
							<a href="">Nâng cấp tài khoản</a>
						</span>
					</div>
					<div className="position-relative h-100 flex-shrink-0 ">
						<div className="header__account h-100 p-x-12">
							<i className="fas fa-user"></i>
							<span className="p-x-4">Nguyễn Lân Hạnh</span>
							<i className="fas fa-angle-down"></i>
						</div>
						<div
							className="d-none text-end position-absolute end-0 p-x-12 border-top rounded-bottom bag-primary"
							style={{
								top: '95%',
								width: '200px',
								lineHeight: '43px',
								borderColor: 'orange!important',
								zIndex: 100,
							}}
						>
							<i className="fas fa-sign-out-alt"></i>
							Log out
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
