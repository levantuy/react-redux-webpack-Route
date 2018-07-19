import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { FormControl, Button, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import logo from '../../logo.svg';

export default class Menu extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div>
                <header>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <img src={logo} className="App-logo" alt="Noticer" href="/" />
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem href="/">Home</NavItem>
                                <NavItem href="/about-us">Dashboard</NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Navbar.Form pullLeft>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" onChange={this.handleOnChange} />
                                </FormGroup>{' '}
                                <Button type="submit">Submit</Button>
                            </Navbar.Form>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Link Right</NavItem>
                                <NavItem eventKey={2} href="#">Link Right</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>

                <main>
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about-us" component={About} />
                    </div>
                </main>
            </div>
        );
    }
}

export default Menu;