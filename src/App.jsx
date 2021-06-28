import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './sass/main.scss'

import Header from './components/Header/Header.jsx'
import Language from './Language/Language.json'
import Footer from './components/Footer/Footer.jsx'
import MainPage from './components/Main-page/Main_page.jsx'
import Compony from './components/Company/Compony.jsx'
import Games from './components/Games/Games.jsx'
import News from './components/News/News.jsx'
import Contacts from './components/Contacts/Contacts.jsx'

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
				<Route exact path='/'>
					<MainPage
						language={Language}
						chengLanguage={chengLanguage}
					/>
				</Route>
				<Route exact path='/company'>
					<Compony
						language={Language}
						chengLanguage={chengLanguage}
					/>
				</Route>
				<Route exact path='/games'>
					<Games language={Language} chengLanguage={chengLanguage} />
				</Route>
				<Route exact path='/news'>
					<News language={Language} chengLanguage={chengLanguage} />
				</Route>
				<Route exact path='/contacts'>
					<Contacts
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
