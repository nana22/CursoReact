import React from 'react'
import logo from '../../logo.svg';
import './Header.css'

export default function Header(props: { numberOfRecipes: number }) {
    const headerClick = () => {
        window.history.pushState({}, 'undefined', "/");
        window.location.reload();

    }
    return (
        <div onClick={headerClick}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>You have: {props.numberOfRecipes} recipes.</h3>
            </header>
        </div>
    )
}
