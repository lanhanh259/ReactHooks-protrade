/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { AssetPage, HomePage, InstructionsPage } from './page'
import { Navigate } from 'react-router-dom'

const AllRoutes = () => (
	<Routes>
		<Route path="/" element={<App />}>
			<Route index element={<Navigate to="/trang-chu" />}></Route>
			<Route path="trang-chu" element={<HomePage />}></Route>
			<Route path="tai-san" element={<AssetPage />}></Route>
			<Route path="huong-dan-su-dung" elementt={<InstructionsPage />}></Route>
			<Route path="*" elementt={<HomePage />}></Route>
		</Route>
	</Routes>
)

export default AllRoutes
