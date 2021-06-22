import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './sass/main.scss'

import Header from './components/Header/Header.jsx'
import Language from './Language/Language.json'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
	const [chengLanguage, setChengLanguage] = useState('ru')
	return (
		<BrowserRouter>
			<Header
				language={Language}
				chengLanguage={chengLanguage}
				setChengLanguage={setChengLanguage}
			/>
			<Switch>
				<Route path='/home'></Route>
			</Switch>
			<Footer
				language={Language}
				chengLanguage={chengLanguage}
				setChengLanguage={setChengLanguage}
			/>
		</BrowserRouter>
	)
}
