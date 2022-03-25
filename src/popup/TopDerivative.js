import React from 'react'
import styled from 'styled-components'
import topDerivativeImg from '../statics/img/top-derivative.png'
import { useRecoilState } from 'recoil'
import { isPopupState } from '../recoilState'
import { useNavigate } from 'react-router-dom'

const TopDerivative = () => {
	const [isPopup, setIsPopup] = useRecoilState(isPopupState)
	const navigate = useNavigate()
	return (
		<>
			<Container className="position-fixed top-0 end-0 bottom-0 start-0 bag-overlay">
				<div
					className="bag-white position-absolute top-50 start-50 translate-middle "
					style={{
						minWidth: '1000px',
						borderRadius: '10px',
						border: '2px solid rgb(136, 136, 136)',
					}}
				>
					<div className="p-20 ">
						<div className="popup-close d-flex justify-content-end ">
							<i
								role="button"
								className="fas fa-times txt-primary p-8"
								style={{ fontSize: '20px' }}
								onClick={() => setIsPopup(!isPopup)}
							></i>
						</div>
						<div>
							<div className="p-x-4">
								<img
									className="p-y-8"
									src={topDerivativeImg}
									alt="logo"
									style={{ height: '130px' }}
								/>
								<div className="p-y-8">
									<div
										role="button"
										className="navigate"
										onClick={() => {
											navigate('/trang-chu')
											setIsPopup(!isPopup)
										}}
									>
										THAM GIA NGAY TẠI ĐÂY
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			)
		</>
	)
}

const Container = styled.div`
	.navigate {
		line-height: 30px;
		border-radius: 15px;
		box-shadow: 0 0 10px 0 rgb(0 0 0 / 40%);
		background-image: linear-gradient(276deg, #751b7a, #252061);
		width: 300px;
		height: 30px;
		display: inline-block;
	}
	.navigate:hover {
		opacity: 0.8;
	}
`
export default TopDerivative
