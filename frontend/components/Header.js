import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { APP_NAME } from '../config'

function Header() {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    {APP_NAME}
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Components
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
