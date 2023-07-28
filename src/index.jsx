import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './pages/App'
import Error from './pages/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'

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