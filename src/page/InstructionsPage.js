import React from 'react'
import styled from 'styled-components'

export default function InstructionsPage() {
	return (
		<Container>
			<div id="guide">
				<div style={{ padding: '60px' }}>
					<h1 className="txt-orange fw-bold text-uppercase">
						HƯỚNG DẪN SỬ DỤNG DTRADEPRO
					</h1>
					<p className="text-uppercase fw-bold">
						Tốc độ vượt trội - Chớp ngay cơ hội
					</p>
					<div className="bag-white"></div>
				</div>
			</div>
		</Container>
	)
}
const Container = styled.div`
	#guide {
		padding-top: 60px;
		height: 100vh;
		background-image: url(https://static-01.vndirect.com.vn/images/protrade/guide/background_guide.jpg);
		background-size: cover;
		background-position: 50%;
	}
`
