import React from "react";
import Logo from "../../Common/Logo/Logo"
import MenuItem from "../MenuItem/MenuItem";
import "./styles.css"

const Menu = () => {

    const items = [
        {id: 1, title: 'individual clients', reference: '#'},
        {id: 2, title: 'corporate clients', reference: '#'},
        {id: 3, title: 'contacts', reference: '#'},
        {id: 4, title: 'about us', reference: '#'},
        {id: 5, title: 'online banking', reference: '#'}
      ];

    return (
        <ul className="menuList">
            <li className="menuLogo"><Logo src={require('../../../images/logo.png')} to="/login" alt="logo" className="logoImg" /> </li>
            {items.map((item) =>
                <MenuItem key={item.id}
                        title={item.title}
                        reference={item.reference}
                        className="link"
                />
            )}
        </ul>
    )
};

export default Menu;