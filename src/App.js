import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import ActiveDog from './components/ActiveDog';
import DogList from './components/DogList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            dogs: [],
            filteredDogs: null,
            sortBy: false,
            order: false
        };
        this.loadDogs();
    }

    loadDogs() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                return response.json().then(data => {
                    this.setState.dogs = data;
                    this.setState.filteredDogs = data;
                    this.selectDog(data[0]);
                });
            })
    }

    sortByName = () => {
        this.setState.order = !this.state.order;
        this.setState.filteredDogs = this.state.filteredDogs.sort((a, b) => {
            return (this.state.order ? 1 : -1) * ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
        });
        this.selectDog(this.state.filteredDogs[0]);
    };

    search = (val) => {
        const regex = new RegExp(val, 'i');
        this.setState.searchValue = val;
        this.setState.filteredDogs = this.state.dogs.filter(el => regex.test(el.name));

        this.selectDog(this.state.filteredDogs[0])
    };

    selectDog = (dog) => {
        this.setState.activeDog = dog;
        this.setState(this.state);
    };

    render() {
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col">
                        <SearchBar searchValue={this.state.searchValue} changeValue={this.search}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ToolBar sortByName={this.sortByName} />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <ActiveDog dog={this.state.activeDog}/>
                    </div>
                    <div className="column">
                        <DogList list={this.state.filteredDogs} selectDog={this.selectDog}/>
                    </div>
                </div>
            </div>
        );
    }
}
