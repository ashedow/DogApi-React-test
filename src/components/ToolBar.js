import React, {Component} from 'react';

export default class ToolBar extends Component {
    render() {
        return (
            <div className="toolbar">
                <button className="btn btn-default" onClick={this.props.sortByName}>
                    <i className="icon fa fa-sort-alpha-asc"/>
                    <span>  Sort by name</span>
                </button>
            </div>
        );
    }
}
