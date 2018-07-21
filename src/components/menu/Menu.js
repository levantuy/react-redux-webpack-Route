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
                            <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
                            <NavItem componentClass={Link} href="/" to="/about-us">Dashbord</NavItem>
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
            </div >
        );
    }
}

export default Menu;