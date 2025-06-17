import React from 'react'
import './Header.css'
import Jordan from '../../assets/jordan.png'

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-first">
                    <img src={Jordan} width="20" height="20"/>
                </div>
                <div className="header-back">
                    <ul className='list-header'>
                        <li className='no-dropdown'>Find a store</li>
                        <li className='dropdown no-dropdown'>Help
                        <ul className='dropdown-list'>
                            <li>Help</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Term</li>
                        </ul>
                        </li>
                        <li className='no-dropdown'>Join us</li>
                        <li className='no-dropdown'>Sign in</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header