import React from "react";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import classes from './HomeScreen.module.scss';
import mainIllustration from '../../img/maiinIllustration.svg';
import secondIllustration from '../../img/secondIllustration.svg'
import template from '../../img/template.svg'
import thirdIllustration from '../../img/thirdIllustration.svg'

export const HomeScreen = () => {
    return(
        <div className={classes.home}>
            <Header />
            <main>
                <div className="g-container">
                    <section className={classes.home__main}>
                        <img src={mainIllustration} alt='Introduce your project' className={classes.home__main_img}/>
                        <div className={classes.home__main__wrapper}>
                            <article>
                                <h1 className={classes.home__main__wrapper_h1}>Introduce Your Product Quickly & Effectively</h1>
                                <h4 className={classes.home__main__wrapper_descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</h4>
                                <h4 className={`${classes.home__main__wrapper_descr} ${classes.home__main__wrapper_descrMargin}`}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h4>
                            </article>
                            <div className={classes.home__main__wrapper__buttons}>
                                <Button 
                                    title = {'Purchase UI Kit'}
                                    type = {'huge'}/>
                                <Button 
                                    title = {'Learn More'}
                                    type = {'huge'}
                                    isBlueBackground = {true}
                                    style = {{marginLeft: '30px'}}/>
                            </div>
                        </div>
                    </section>
                    <section className={classes.home__second}>
                        <div className={classes.home__second__textBlock}>
                            <article>
                                <h2 className={classes.home__second__textBlock_h2}>Light, Fast & Powerful</h2>
                                <h3 className={classes.home__second__textBlock_descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</h3>
                                <h3 className={`${classes.home__second__textBlock_descr} ${classes.home__second__textBlock_descrMargin}`}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h3>
                            </article>
                            <div className={classes.home__second__textBlock__wrapperElements}>
                                <div className={classes.home__second__textBlock__wrapperElements__element}>
                                    <img src={template} alt='title over here' className={classes.home__second__textBlock__wrapperElements__element_img}/>
                                    <p className={classes.home__second__textBlock__wrapperElements__element_title}>Title Goes Here</p>
                                    <p className={classes.home__second__textBlock__wrapperElements__element_descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                                <div className={classes.home__second__textBlock__wrapperElements__element}>
                                    <img src={template} alt='title over here' className={classes.home__second__textBlock__wrapperElements__element_img}/>
                                    <p className={classes.home__second__textBlock__wrapperElements__element_title}>Title Goes Here</p>
                                    <p className={classes.home__second__textBlock__wrapperElements__element_descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                            </div>
                        </div>
                        <img src={secondIllustration} alt='light and fast introduce' className={classes.home__second_img}/>
                    </section>
                    <section className={classes.home__third}>
                        <img src={thirdIllustration} alt='fast and powerful introduce' className={classes.home__third_img}/>
                        <article className={classes.home__third__textBlock}>
                            <h2 className={classes.home__third__textBlock_h2}>Light, Fast & Powerful</h2>
                            <h3 className={classes.home__third__textBlock_descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</h3>
                            <h3 className={`${classes.home__third__textBlock_descr} ${classes.home__third__textBlock_descrMargin}`}>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h3>
                        </article>
                    </section>
                </div>
                <section className={classes.home__price}>
                    <div className="g-container">
                        <div className={classes.home__price__wrapper}>
                            <h2 className={classes.home__price__wrapper_h2}>A Price To Suit Everyone</h2>
                            <h3 className={classes.home__price__wrapper_h3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</h3>
                            <p className={classes.home__price__wrapper_amount}>$40</p>
                            <p className={classes.home__price__wrapper_kit}>UI Design Kit</p>
                            <p className={classes.home__price__wrapper_options}>See, One price. Simple.</p>
                            <Button 
                                title = {'Purchase UI Kit'}
                                type = {'huge'}
                                style = {{marginTop: '9px', fontSize: '14px', lineHeight: '26px'}}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

