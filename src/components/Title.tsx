import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

interface IProps {
    name: string;
}

const useStyles = makeStyles({
    container: {
        //border: "1px solid black",
        marginLeft: "70px",
        textAlign: "left"
    },
    title: {
        color: "#000000",
        fontSize: "30px",
        marginLeft: "10px",
        fontFamily: "Poppins",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: 5,
        opacity: .3
    },
});


const Title = ({name}: IProps) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>{name}</Typography>
        </div>
    )
};

export default Title;

