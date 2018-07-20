import React from 'react';
import { Component } from 'react';
import { FormControl, Button, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import logo from '../../logo.svg';
import { Link } from 'react-router';

class Menu extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img src={logo} className="App-logo" alt="Noticer" href="/" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem>
                                <Link role="presentation" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link role="presentation" to="/about-us">Dashboard</Link>
                            </NavItem>
                            <NavDropdown role="presentation" title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem>
                                    <Link role="presentation" to="/">Action 1</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link role="presentation" to="/">Action 2</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem>
                                    <Link role="presentation" to="/">Separated link</Link>
                                </MenuItem>
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
            </div >
        );
    }
}

export default Menu;