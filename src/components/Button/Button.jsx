import React from "react";
import classes from './Button.module.scss'

export const Button = (props) => {
    return(
        props.type === 'tiny' ?
        <button style={props.style} className={classes.tinyButton}>{props.title}</button>
        :
        <button style={props.style} className={!props.isBlueBackground ? classes.hugeButton : `${classes.hugeButton} ${classes.hugeButton_white}`}>{props.title}</button>
    )
}