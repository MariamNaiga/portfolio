import { Typography, makeStyles, Button, Tooltip } from '@material-ui/core';
import React from 'react';
import resume from '../data/Resume.pdf';

const $white = "#FFFFFF"
const $black = "#27292D"
const $pink = "#FFCEA2"

const useStyles = makeStyles({
    content: {
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, .5)",
        margin: "20px",
    },
    links: {
        textAlign: "center",
        margin: "20px",
    },
    btn: {
        color: $white,
        borderRadius: 0,
        letterSpacing: 4,
        textTransform: "lowercase",
        fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        fontWeight: 300,
        margin: "5px 5px",
        border: "1px solid #FFCEA2",
        "&:hover": {
            transform: "ease-in 2s",
            backgroundColor: $pink,
            color: $black,
        }
    },
    copyright: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
        margin: "10px",
        color: "#FFCEA2",
        letterSpacing: 2,
        textTransform: "uppercase",
    },
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.links}>
                <Button 
                    className={classes.btn} 
                    href="https://www.linkedin.com/in/shamila-mariam-naiga-166566123/"
                    disableRipple={true}
                    target='_blank'
                >LinkedIn</Button>
                <Button 
                    className={classes.btn} 
                    href="https://github.com/MariamNaiga"
                    disableRipple={true}
                    target='_blank'
                >GitHub</Button>
                <Button 
                    className={classes.btn}
                    href="https://twitter.com/_mariam_naiga"
                    disableRipple={true}
                    target='_blank'
                >Twitter</Button>
                <Button 
                    className={classes.btn}
                    href="https://www.instagram.com/mariambukenya/"
                    disableRipple={true}
                    target='_blank'
                >Instagram</Button>
            </div>
            <div className={classes.links}>
                <Tooltip disableFocusListener title="Copy To Clipboard" placement="left">
                    <Button
                        className={classes.btn}
                        disableRipple={true}
                        onClick={() => {navigator.clipboard.writeText("mariambukenya@gmail.com")}}
                    >mariambukenya@gmail.com</Button>
                </Tooltip>
                <Button 
                    className={classes.btn}
                    disableRipple={true}
                    href={resume} 
                    target="_blank"
                >Download Resume</Button>
            </div>
            <Typography className={classes.copyright}>Designed & Developed By Shamila Mariam Naiga</Typography>
        </div>
    )
}

export default Footer;

