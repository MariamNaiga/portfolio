import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    box: {
        width: "50px",
        height: "50px",
        backgroundColor: "#27292D",
        position: "fixed",
        bottom: "45px",
        right: "45px",
        zIndex: 99,
        border: "1px solid #ffffff",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        display: "inline-flex",
        "& .line1": {
            backgroundColor: "#FFFFFF",
            width: "20px",
            border: "1px solid white",
            transform: "rotate(-45deg) translateY(3px) translateX(4.5px)",
            transition: "transform .5s ease-in-out",
        },
        "& .line2": {
            backgroundColor: "#FFFFFF",
            width: "20px",
            border: "1px solid #FFCEA2",
            transform: "rotate(45deg) translateY(3px) translateX(-4.5px)",
            transition: "transform .5s ease-in-out",
        },
        "&:hover":{
            border: "1px solid #ffcea2",
            "& .line1": {
                transform: "rotate(315deg) translateY(3px) translateX(4.5px)"
            },
            "& .line2": {
                transform: "rotate(-315deg) translateY(3px) translateX(-4.5px)"
            }
        }
    },
})

const BackToTop = () => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <hr className="line1"></hr>
            <hr className="line2"></hr>
        </div>
    )
}

export default BackToTop;

