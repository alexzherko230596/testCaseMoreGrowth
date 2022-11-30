import React from "react";
import { Button } from "../Button/Button";
import classes from './Footer.module.scss'
import { ReactComponent as Facebook } from '../../img/facebook.svg'
import { ReactComponent as Linkedln } from '../../img/linkedln.svg'
import { ReactComponent as Twitter } from '../../img/twitter.svg'
import { ReactComponent as Youtube } from '../../img/youtube.svg'
import { ReactComponent as Instagram } from '../../img/instagram.svg'

export const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className="g-container">
                <div className={classes.footer__wrapper}>
                    <div className={classes.footer__wrapper__top}>
                        <p className={classes.footer__wrapper__top_title}>©2020 Yourcompany</p>
                        <p className={classes.footer__wrapper__top_descr}>Landie</p>
                        <Button 
                            title = {'Purchase now'}
                            type = {'tiny'}
                            style = {{width: '109px'}}/>
                    </div>
                    <div className={classes.footer__wrapper_devider}/>
                    <div className={classes.footer__wrapper__social}>
                        <nav>
                            <ul className={classes.footer__wrapper__social__list}>
                                <li className={classes.footer__wrapper__social__list_element}>Home</li>
                                <li className={classes.footer__wrapper__social__list_element}>About</li>
                                <li className={classes.footer__wrapper__social__list_element}>Contact</li>
                            </ul>
                        </nav>
                        <div className={classes.footer__wrapper__social__sites}>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={classes.footer__wrapper__social__sites_link}>
                                {/* <img src={facebook} alt='facebook' className={classes.footer__wrapper__social__sites_img}/> */}
                                {/* <svg width="17" height="17" viewBox="0 0 17 17" fill="red" xmlns="http://www.w3.org/2000/svg" className={classes.footer__wrapper__social__sites_link_img}>
                                    <path d="M9.28564 6.10522V4.10522C9.28564 3.55322 9.73364 3.10522 10.2856 3.10522H11.2856V0.605225H9.28564C7.62864 0.605225 6.28564 1.94822 6.28564 3.60522V6.10522H4.28564V8.60522H6.28564V16.6052H9.28564V8.60522H11.2856L12.2856 6.10522H9.28564Z" fill="#B0B8BC"/>
                                </svg> */}
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className={classes.footer__wrapper__social__sites_img}/>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <Linkedln className={classes.footer__wrapper__social__sites_img}/>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className={classes.footer__wrapper__social__sites_img}/>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <Youtube className={classes.footer__wrapper__social__sites_img} />
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                {/* <img src={instagram} alt='facebook' className={classes.footer__wrapper__social__sites_img}/> */}
                                <Instagram className={classes.footer__wrapper__social__sites_img}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}