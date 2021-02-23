import React, {Component} from 'react';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';



class App extends Component{
	constructor(){
		super();
		/*this.state = {
			robots: robots,
			searchField: ''
		}*/
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	//react hook
	componentDidMount(){
		//window.fetch
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => 
				{
					return response.json()
				})
			.then(users => this.setState({robots:users}));
	}

	// eğer bu fonksiyonu bu şekilde kullanırsak burdaki 'this' aslında input un this i oluyor
	/*onSearchChange(event){
		const filteredRobots = this.state.robots.filter(
			(robot) => {
				 return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
				}
			)
		console.log(filteredRobots);
	}*/

	onSearchChange = (event) =>{

		this.setState({searchField: event.target.value});		
	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(
			(robot) => {
				 return robot.name.toLowerCase().includes(searchField.toLowerCase());
				}
			)

		return !robots.length ? (<h1>Loading</h1>) :
		(			
				<div className = 'tc'>
					<h1 className= 'f1'>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>	
				
		);
	}	
}

export default App;