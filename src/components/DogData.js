import React, {Component} from 'react';

export default class DogData extends Component {
    selectDog = () => {
        this.props.selectDog(this.props.dog);
    };

    render() {
        return (
            <tr onClick={this.selectDog}>
                <td>
                    <img src={`images/${this.props.dog.image}.jpg`} className="dog-image"/>
                </td>
                <td>{this.props.dog.name}</td>
            </tr>
        );
    }
}
