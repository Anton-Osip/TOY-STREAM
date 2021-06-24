import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './sass/main.scss'

import Header from './components/Header/Header.jsx'
import Language from './Language/Language.json'
import Footer from './components/Footer/Footer.jsx'
import MainPage from './components/Main-page/Main_page.jsx'
import Compony from './components/Company/Compony.jsx'

export default function App() {
	const [chengLanguage, setChengLanguage] = useState('ru')
	const [burgerMenu, setBurgerMenu] = useState(false)
	return (
		<BrowserRouter>
			<Header
				language={Language}
				chengLanguage={chengLanguage}
				setChengLanguage={setChengLanguage}
				burgerMenu={burgerMenu}
				setBurgerMenu={setBurgerMenu}
			/>
			<Switch>
				<Route path='/home'>
					<MainPage
						language={Language}
						chengLanguage={chengLanguage}
					/>
				</Route>
				<Route path='/company'>
					<Compony
						language={Language}
						chengLanguage={chengLanguage}
					/>
				</Route>
			</Switch>
			<Footer
				language={Language}
				chengLanguage={chengLanguage}
				setChengLanguage={setChengLanguage}
				burgerMenu={burgerMenu}
				setBurgerMenu={setBurgerMenu}
			/>
		</BrowserRouter>
	)
}
