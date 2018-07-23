import React, { Component } from 'react';
import MenuContainer from '../../containers/menu/MenuContainer';

export default class App extends Component {

    render() {
        return (
            <div>
                <MenuContainer />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
