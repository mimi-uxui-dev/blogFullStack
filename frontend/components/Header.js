import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { APP_NAME } from '../config'
import Link from 'next/link'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >

                <Link href="/">
                    <div className="navbar-brand">
                        <a>{APP_NAME}</a>
                    </div>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link href="/">
                                <NavLink>
                                    Home
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/signin">
                                <NavLink>
                                    Sign In
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/signup">
                                <NavLink>
                                    Sign UP
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
