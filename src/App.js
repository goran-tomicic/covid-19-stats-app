import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { url } from './api'
import { AppContainer, AppTitle, Card, CardList } from './components'

export default function App() {
	const [ data, setData ] = useState({
		confirmed: {},
		deaths: {},
		recovered: {}
	})

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(url)
			return setData(response.data)
		}
		fetchData()
	}, [])

	return (
		<AppContainer>
			<AppTitle>COVID-19 Statistics</AppTitle>
			<CardList>
				<Card
					cardTitle="Confirmed"
					cardColor="bg-blue-400"
					cardData={data.confirmed.value}
				/>
				<Card
					cardTitle="Deaths"
					cardColor="bg-red-400"
					cardData={data.deaths.value}
				/>
				<Card
					cardTitle="Recovered"
					cardColor="bg-teal-400"
					cardData={data.recovered.value}
				/>
			</CardList>
		</AppContainer>
	)
}