import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    content: {
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, .5)",
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
            <Typography className={classes.copyright}>Designed & Developed By Shamila Mariam Naiga</Typography>
        </div>
    )
}

export default Footer;

