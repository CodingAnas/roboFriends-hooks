import React, { Component, useState, useEffect } from 'react'
import Cardlist from '../Components/CardList';
import Searchbox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Errorboundary from '../Components/Errorboundary'
import './App.css'

const App = () => {

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect (()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))

			console.log(searchfield)
	}, [searchfield])

	const onSearch = (event) =>
	{
		setSearchfield(event.target.value)
	}

	const filteredbots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})

	return !robots.length ? 
	<h1 className="tc Head">LOADING!!!</h1> :
	(
		<div className="tc">
			<h1 className="Head">RoboFriends</h1>
			<Searchbox search={onSearch}/>
			<Scroll>
				<Errorboundary>
					<Cardlist robots={filteredbots}/>
				</Errorboundary>
			</Scroll>
		</div>
	);
}

export default App;