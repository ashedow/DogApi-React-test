import React, {Component} from 'react';

export default class DogData extends Component {
    selectDog = () => {
        this.props.selectDog(this.props.dog);
    };

    render() {
        return (
            <tr onClick={this.selectDog}>
                <td>
                    <img src={`https://dog.ceo/api/breed/${this.props.dog}/images`} className="dog-image"/>
                </td>
                <td>{this.props.dog.name}</td>
            </tr>
        );
    }
}
