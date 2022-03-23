/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/layout/header'

function App() {
	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	)
}

export default App
