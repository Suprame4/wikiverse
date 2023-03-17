import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Home from './Home'
import About from './About'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Home pages={pages}/>}/>
						<Route path="about" element={<About/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
			
		</main>
		
	)
}






