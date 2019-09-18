import Vue 			from 'vue'
import Router 		from 'vue-router'

import Stocks 		from './components/stocks/Stocks'
import Portfolio 	from './components/portfolio/Portfolio'
import Home 		from './components/Home'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: 'Home'
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/stocks',
			name: 'Stocks',
			component: Stocks
		},
		{
			path: '/portfolio',
			name: 'Portfolio',
			component: Portfolio
		},
	]
})