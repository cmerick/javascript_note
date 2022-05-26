import { Navbar, Container, Column } from 'rbx';
import Logo from '../../assets/images/logo.png';
import "../../styles/header.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Logo} />
                        </Link>
                        <Navbar.Burger
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbar-menu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </ Navbar.Burger>
                    </ Navbar.Brand>

                    <Navbar.Menu id="navbar-menu" active={openMenu.toString()} onClick={() => setOpenMenu(!openMenu)}>
                        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                            <Column.Group>
                                <Column>
                                    <Link to="/register" className="button link">Register</Link>
                                </Column>
                                <Column>
                                    <Link to="/login" className="link button is-outlined">Login</Link>
                                </Column>
                            </Column.Group>
                        </ Navbar.Segment>
                    </ Navbar.Menu>
                </ Container>
            </ Navbar>
        </>

    );

}


export default Header;