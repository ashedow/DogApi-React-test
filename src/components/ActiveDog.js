import React, {Component} from 'react';

export default class ActiveDog extends Component {
    render() {
        if (!this.props.dog) {
            return (<h2>Nothing found :(</h2>);
        }

        return (
            <div className="thumbnail">
                <img src={`images/${this.props.dog.image}.svg`}/>
                <div className="thumbnail-caption">
                    <h3>{this.props.dog.name}</h3>
                </div>
            </div>
        );
    }
}
