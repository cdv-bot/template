import React from 'react';
import { Link, Route } from "react-router-dom";

function Menu(props) {
    const Menu = [
        {
            name: "Trang chủ",
            to: '/',
            exact: true
        },
        {
            name: 'Quản lý sản phẩm',
            to: '/product-list',
            exact: false
        }
    ];

    const MenuLink = ({ label, to, activeOnly }) => {
        return (
            <Route
                path={to}
                exact={activeOnly}
                children={({ match }) => {
                    let active = match ? 'btn btn-secondary active' : " ";
                    return (
                        <li className={active}>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    );
                }}
            />
        );
    }

    const showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnly={menu.exact}
                    />
                );
            });
        }
        return result;
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {showMenu(Menu)}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;