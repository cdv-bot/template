import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route } from "react-router-dom";


const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'thông tin',
        to: '/product',
        exact: false
    },
    {
        name: 'Đăng nhập',
        to: '/login',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnLyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnLyWhenExact} children={({ match }) => {
            let active = match ? 'active abc' : '';
            return (
                <div className={active}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </div>
            )
        }} />
    )
}

function Menu(props) {
    const showMenu = (menus) => {
        if (menus.length > 0) {
            let result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnLyWhenExact={menu.exact}
                    />
                )
            });
            return result;
        }
    }
    return (
        <div className="App" >
            <Navbar bg="dark" variant="light">
                <Nav className="mr-auto">
                    {
                        showMenu(menus)
                    }
                </Nav>
            </Navbar>
        </div>

    );
}

export default Menu;