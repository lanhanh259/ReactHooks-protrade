import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isPopupState } from '../../../recoil/atom'
import { menuHeaderActiveState } from '../../../recoil/atom/headerState'
import logo from '../../../statics/img/logo.svg'
import Clock from './Clock'

export default function Header() {
	const [isPopup, setIsPopup] = useRecoilState(isPopupState)
	const [menuHeaderActive, setMenuHeaderActive] = useRecoilState(
		menuHeaderActiveState
	)

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
				{/* <div className="d-flex align-items-center  p-x-16 ">
					<span className="flex-shrink-0  fw-700 m-x-8 txt-orange">{time}</span>
					<span className="flex-shrink-0 fw-500 txt-orange">{date}</span>
				</div> */}
				<Clock />
				<div className="header__horizontal-menu d-flex">
					<ul className="flex-shrink-0 d-flex ">
						<li>
							<Link
								to="/trang-chu"
								className={clsx(
									'txt-white fw-700 p-x-12 p-y-4 bs-333 border-333',
									{ active: menuHeaderActive === 'trang-chu' }
								)}
								onClick={() => setMenuHeaderActive('trang-chu')}
							>
								Trang chủ
							</Link>
						</li>
						<li>
							<Link
								to="/tai-san"
								className={clsx(
									'txt-white fw-700 p-x-12 p-y-4 bs-333 border-333',
									{ active: menuHeaderActive === 'tai-san' }
								)}
								onClick={() => setMenuHeaderActive('tai-san')}
							>
								Tài sản
							</Link>
						</li>
						<li>
							<Link
								to="/huong-dan-su-dung"
								className={clsx(
									'txt-white fw-700 p-x-12 p-y-4 bs-333 border-333',
									{ active: menuHeaderActive === 'huong-dan-su-dung' }
								)}
								onClick={() => setMenuHeaderActive('huong-dan-su-dung')}
							>
								Hướng dẫn
							</Link>
						</li>
					</ul>
					<div className="flex-shrink-0">
						<span className="txt-orange">Lãi/Lỗ:</span>
						<span className="txt-yellow  p-x-4">0</span>
					</div>
				</div>
				<div className="header__profitloss-top flex-grow-1 text-center">
					<div
						role="button"
						className=" d-inline rounded p-y-4 p-x-12"
						style={{ backgroundColor: '#97037c' }}
						onClick={() => setIsPopup(!isPopup)}
					>
						<i className="fas fa-trophy p-x-4"></i>
						Top cao thủ phái sinh
					</div>
				</div>

				{/* <!-- header: menu --> */}
				<div className="header__menu d-flex justify-content-end align-items-center h-100">
					<div className="flex-shrink-0 m-x-8">
						<span
							className=" rounded p-y-4 p-x-12 fw-700"
							style={{ border: '1px solid orange' }}
						>
							BẢN TRIAL
						</span>
					</div>
					<div className="header__uplevel flex-shrink-0">
						<span className="rounded p-y-4 bag-orange">
							<a
								className=" p-x-8"
								href="https://myaccount.vndirect.com.vn/account-info?tab=account-register"
								target="_blank"
								rel="noreferrer"
							>
								Nâng cấp tài khoản
							</a>
						</span>
					</div>
					<div className="header__account position-relative h-100 flex-shrink-0 p-x-8">
						<div className="">
							<i className="fas fa-user"></i>
							<span className="p-x-4">Nguyễn Lân Hạnh</span>
							<i className="fas fa-angle-down"></i>
						</div>
						<div
							id="logout"
							className=" text-end position-absolute end-0 p-x-12 rounded-bottom bag-main"
							style={{
								top: '44px',
								width: '200px',
								borderTop: '1px solid orange',
								cursor: 'pointer',
							}}
						>
							<i className="fas fa-sign-out-alt"></i>
							<span className="p-x-8">Log out</span>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}
