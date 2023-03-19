import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import DeletePage from './pages/DeletePage'
import NoPage from './pages/NoPage'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			console.log("pages data: ", pagesData)
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages()
	}, []);

	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Home pages={pages} />}/>
						<Route path="add" element={<AddPage pages={pages}/>}/>
						<Route path="delete" element={<DeletePage pages={pages}/>}/>
						<Route path="*" element={<NoPage />}/>
					</Route>
				</Routes>
			</BrowserRouter>
			
		</main>
		
	)
}






