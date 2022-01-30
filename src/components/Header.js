import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    main: {
       // margin: 0,
       // border: "1px solid green",
        padding: "0px 0px",
        margin: "40px 0px"
    },
    container: {
        textAlign: "left", 
        margin: "20px 100px", 
        borderBottom: "1px solid #ffcea2"
    },
    brand: {
        color: "#FFFFFF", 
        fontFamily: "Poppins", 
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: 700,
        letterSpacing: 2,
        //cursor: "pointer",
        //border: "1px dashed black"
    },
    _brand: {
        color: "#BFBFBF",
        fontSize: 17,
        fontWeight: 400,
        letterSpacing: 4,
    },
})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <Typography className={classes.brand}>Shamila Mariam Naiga <span className={classes._brand}>Entry Level Software Developer</span></Typography>
            </div>
        </div>
    )
}

export default Header;

