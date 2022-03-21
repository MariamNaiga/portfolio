import { makeStyles, Button, Tooltip } from '@material-ui/core';
import React from 'react';
import resume from '../data/Resume.pdf';

const useStyles = makeStyles({
    left: {
       // position: "fixed", 
       // bottom: "35%", 
       // left: -240, 
       // transform: "rotate(-90deg)", 
       // width: "550px",
        zIndex: 1,
        textAlign: "center"
    },
    right: {
       // position: "fixed", 
        //top: "35%", 
        //right: -240, 
        //transform: "rotate(90deg)", 
        //width: "550px", 
        zIndex: 1,
        textAlign: "center",
    },
    btn: {
        color: "#FFFFFF",
        backgroundColor: "transparent",
        borderRadius: 0,
        letterSpacing: 4,
        textTransform: "lowercase",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: 400,
        margin: "0px 5px",
        zIndex: 99,
        "&:hover": {
            backgroundColor: "transparent",
            color: "#FFCEA2",
        }
    }
});

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.left}>
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
            <div className={classes.right}>
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
        </div>
    )
};
export default Contact;

