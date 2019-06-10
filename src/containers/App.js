import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ monsters: users})} );
        }, 1500)
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); 
    }

    render() {
        const { monsters, searchfield } = this.state;
        const filteredMonsters = monsters.filter(monster =>{
            return monster.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !monsters.length ?
            <div>
                <h1 className='text-info text-center mb-5'>Monster Buddies</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Spinner/>
            </div> :
            (
            <div>
                <h1 className='text-info text-center mb-5'>Monster Buddies</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
            );
        }

}

export default App;