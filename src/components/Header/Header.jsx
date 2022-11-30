import React from "react";
import { Button } from "../Button/Button";
import classes from './Header.module.scss'

export const Header = () => {
    return(
        <div className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <nav>
                        <ul className={classes.header__wrapper__list}>
                            <li className={classes.header__wrapper__list_element}>Home</li>
                            <li className={classes.header__wrapper__list_element}>About</li>
                            <li className={classes.header__wrapper__list_element}>Contact</li>
                        </ul>
                    </nav>
                    <p className={classes.header__wrapper_logo}>Landie</p>
                    <Button 
                        title = {'Buy Now'}
                        type = {'tiny'}
                        style = {{width: '160px'}}/>
                </div>
            </div>
        </div>
    )
}