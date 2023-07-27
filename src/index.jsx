import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import Error from './components/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './components/Apropos'
import FicheLogement from './components/FicheLogement'

ReactDOM.render(
	<React.StrictMode>
		<Router>
		<Routes>

			<Route>
			<Route path='/' element={<App />} />
			<Route path="*" element={<Error />} />
			<Route path='/Apropos' element={<Apropos />} />
			<Route path='/FicheLogement' element={<FicheLogement />} />
			</Route>
		</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)