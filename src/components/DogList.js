import React, {Component} from 'react';
import DogData from './DogData';

export default class DogList extends Component {
    render() {
        if (!this.props.list) {
            return (<span>Loading...</span>)
        }

        return (
            <table className="dog-list table table-striped">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map(item => {
                    return (
                        <DogData key={item.id} dog={item} selectDog={this.props.selectDog}/>
                    )
                })}
                </tbody>
            </table>
        );
    }
}