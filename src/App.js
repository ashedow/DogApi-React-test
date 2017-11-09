import axios from 'axios';
import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import ActiveDog from './components/ActiveDog';
import DogList from './components/DogList';

export default class App extends Component {
      constructor(props){
        super(props)
        this.state = {
            isDone: false
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchValue: '',
    //         dogs: [],
    //         filteredDogs: null,
    //         sortBy: false,
    //         order: false
    //     };
    //     this.loadDogs();
    // }

    componentDidMount() {
    const { getBreed } = this.props

    axios.get('https://dog.ceo/api/breeds/list')
      .then(response => {
        (response.data.message)
        this.setState({
          isDone: true
        })
      })

      .catch(err => {
        this.setState({
          isDone: true
        })
        throw err
      })
  }

    // loadDogs() {
    //     fetch('https://dog.ceo/api/breeds/list/all')
    //         .then(response => {
    //             return response.json().then(({message: dogs}) => this.setState({dogs}))

    //     // fetch('https://dog.ceo/api/breeds/list/all', {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         Accept: 'application/json',
    //     //     },
    //     // },
    //     // ).then(response => {
    //     //     if (response.ok) {
    //     //         response.json().then(data => {
    //     //             this.setState.dogs = data;
    //     //             this.setState.filteredDogs = data;
    //     //             this.selectDog(data[0]);
    //     //         // response.json().then(json => {
    //     //         //     console.log(json);
    //     //         });
    //     //     }
    //     // });



    //     // fetch('https://dog.ceo/api/breeds/list/all')
    //     //     .then(response => {
    //     //         return response.json().then(data => {
    //     //             this.setState.dogs = data;
    //     //             this.setState.filteredDogs = data;
    //     //             this.selectDog(data[0]);
    //     //         });
    //     //     })


    //     // fetch('https://dog.ceo/api/breeds/list/all')
    //     //     .then((response) => {
    //     //         return response.json()
    //     //     })
    //     //     .then((json) =>  this.setState({
    //     //         data: json,
    //     //         searchData: json
    //     //     }))
    //     //     .catch((error) =>  console.log(error))            
    // }

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
