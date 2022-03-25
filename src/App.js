/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import './App.css'
import Header from './components/layout/header'
import { TopDerivativePopup } from './popup'
import { isPopupState } from './recoilState'

function App() {
	const isPopup = useRecoilValue(isPopupState)

	return (
		<div className="App">
			<Header />
			<Outlet />
			{isPopup && <TopDerivativePopup />}
		</div>
	)
}

export default App
