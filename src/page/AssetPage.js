import React from 'react'
import styled from 'styled-components'

export default function AssetPage() {
	return (
		<Container>
			<div className="bag-second" style={{ padding: ' 42px 0' }}>
				<div className="fst-italic " style={{ lineHeight: '35px' }}>
					<i className="txt-red fas fa-exclamation-triangle"></i>
					<span className="txt-red  p-x-8" style={{ fontSize: '14px' }}>
						Danh mục và Tài sản của Quý khách sẽ trở về mặc định sau ngày đáo
						hạn hợp đồng tương lai của tháng
					</span>
				</div>

				<div className="" style={{ paddingTop: '40px' }}>
					{/* ASSETS OVERVIEW */}
					<div
						id="assets-overview"
						className="d-flex "
						style={{ padding: ' 42px 20px' }}
					>
						{/* col 1 */}
						<div className="flex-grow-1 p-x-12 ">
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="txt-orange fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start">
									<span className="txt-orange p-s-8">Tài sản ròng </span>
									<i className="fas fa-info-circle txt-orange"></i>
								</div>
								<span className="txt-orange text-end">4000000</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Số dư ký quỹ có thể sử dụng </span>
								</div>
								<span className="txt-orange text-end">2400000</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Số tiền ký quỹ cần bổ sung </span>
									<i className="fas fa-info-circle"></i>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
						</div>
						{/* col 2*/}
						<div className="flex-grow-1 p-x-12 ">
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="txt-orange fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start">
									<span className="txt-orange p-s-8">Nghĩa vụ ký quỹ</span>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Ký quỹ ban đầu </span>
									<i className="fas fa-info-circle"></i>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--dotted p-y-8">
								<i className="fas fa-money-bill-alt"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Ký quỹ biến đổi </span>
									<i className="fas fa-info-circle"></i>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
						</div>
						{/* col 3*/}
						<div className="charts"></div>
					</div>
					{/* ASSETS DETAIL */}
					<div
						id="assets-overview"
						className="d-flex bag-main"
						style={{ padding: ' 42px' }}
					>
						{/* col 1 */}
						<div className="flex-grow-1 p-x-12 ">
							<div className="d-flex align-items-center assets-overview__item--solid p-y-8">
								<i className="txt-orange fas fa-star"></i>
								<div className="flex-grow-1 text-start">
									<span className="txt-orange p-s-8 text-uppercase">
										1. Tài sản ký quỹ
									</span>
									<i className="fas fa-info-circle txt-orange"></i>
								</div>
								<span className="txt-orange text-end">3000000</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--solid p-y-8">
								<i className="fas fa-star"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span className="text-uppercase">2. Lãi/lỗ trong ngày </span>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
							<div className="d-flex align-items-center assets-overview__item--solid p-y-8">
								<i className="fas fa-star"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span className="text-uppercase">3. Tiền tại VNDIRECT </span>
								</div>
								<span className="txt-orange text-end">1000000</span>
							</div>
						</div>
						{/* col 2*/}
						<div className="flex-grow-1 p-x-12 ">
							<div className="d-flex align-items-center assets-overview__item--solid p-y-8">
								<i className="txt-orange fas fa-star"></i>
								<div className="flex-grow-1 text-start">
									<span className="txt-orange p-s-8">4. PHÍ & THUẾ</span>
								</div>
								<span className="txt-orange text-end">0</span>
							</div>
							<div
								className="d-flex align-items-center assets-overview__item--dotted p-y-8"
								style={{ marginLeft: '50px' }}
							>
								<i className="fas fa-star"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Phí vị thế cộng dồn</span>
									<i className="fas fa-info-circle"></i>
								</div>
								<span className="text-end">0</span>
							</div>
							<div
								className="d-flex align-items-center assets-overview__item--dotted p-y-8"
								style={{ marginLeft: '50px' }}
							>
								<i className="fas fa-star"></i>
								<div className="flex-grow-1 text-start p-s-8">
									<span>Thuế thu nhập</span>
								</div>
								<span className="text-end">0</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	.assets-overview__item--dotted {
		border-bottom: 1px dotted #a1a1a1;
	}

	.assets-overview__item--solid {
		border-bottom: 1px solid #a1a1a1;
	}
`
