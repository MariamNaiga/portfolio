import { Button, Card, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { more_works } from '../data/data';

const $white = "#FFFFFF"
const $black = "#27292D"
const $pink = "#FFCEA2"

const useStyles = makeStyles({
    container: {
        margin: "20px 70px",
    },
    card: {
        border: "1px solid #FFCEA2",
        backgroundColor: "transparent",
        borderRadius: 0,
        width: "100%",
        height: "250px",
        boxShadow: "none"       
    },
    image: {
        maxWidth: "100%",
        minHeight: "100%",
        margin : 0,
        display: "flex",
        padding: "10px 10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        //position: "relative",
        borderRadius: 0,
        zIndex: -1,
        objectFit: "cover",
    },
    content: {
        textTransform: "uppercase",
        color: $pink,
        fontFamily: "Poppins, sans-serif",
        fontSize: "1em",
        fontWeight: 600,
        letterSpacing: 1,
        //marginLeft: "20px",
        position: "absolute",
        width: "300px",
        top: "17.7%", 
        left: "-20%",
        float: "left",
        transform: "rotate(90deg)",
        backgroundColor: $black,
        padding: "10px 15px",
        textAlign: "center",
    },
    heading: {
        color: $white,
        fontFamily: "Poppins",
        fontWeight: 900,
        fontSize: ".3em",
        textTransform: "uppercase",
        textAlign: "left",
        marginTop: "-30px",
        marginBottom: "10px",
        zIndex: 99,
        //opacity: .8,

    },
    tags: {
        textTransform: "uppercase",
        color: $pink,
        fontFamily: "Poppins, sans-serif",
        fontSize: "1em",
        fontWeight: 600,
        letterSpacing: 1,
        //marginLeft: "20px",
        position: "absolute",
        width: "300px",
        //top: "17.7%", 
        //left: "-20%",
        float: "left",
        //transform: "rotate(90deg)",
        backgroundColor: $black,
        padding: "10px 15px",
        textAlign: "center",
    },
    btn: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: $white,
        padding: "5px 20px",
        //fontFamily: "Playfair, serif",
        fontFamily: "Poppins, sans-serif",
        fontSize: ".9em",
        fontWeight: 500,
        letterSpacing: 2,
        border: `1px solid ${$pink}`,
        borderRadius: 0,
        backgroundColor: "transparent",
        margin: "5px",
        transform: "ease-in 2s",
        //cursor: "none",
        "&:before": {
            width: 0,
            color: "white",
            overflow: "hidden",
            position: "absolute",
            content: "attr(data-text)",
            transition: "all 1s cubic-bezier(0.84, 0, 0.08, 0.99)",
        },
        "&:hover": {
            //cursor: "none",
            transform: "ease-in 2s",
            backgroundColor: $pink,
            color: $black,
        }
    }
})

const MoreWorks = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                {more_works.map((it) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Card className={classes.card}>
                                <CardMedia>
                                    <img 
                                        className={classes.image} 
                                        src={it.image}
                                        alt=""
                                    />
                                </CardMedia>
                            </Card>
                            <Typography>{it.name}</Typography>
                            <Typography>{it.tags}</Typography>
                            {(it.buttons).map((btn) => {
                                return (
                                    <Button
                                        href={btn[1]}
                                        target='_blank'
                                    >{btn[0]}</Button>
                                )
                            })}
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default MoreWorks;
