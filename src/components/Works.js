import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button, makeStyles } from '@material-ui/core';
import { featured_works } from '../data/data';

const $white = "#FFFFFF"
const $black = "#27292D"
const $pink = "#FFCEA2"
//const $gray = "#BFBFBF"

const useStyles = makeStyles({
    container: {
        margin: "50px 100px 100px 100px",
    },
    grid: {
        height: "700px",
        border: `1px solid ${$pink}`,
        textAlign: "center",
        opacity: 1,
    },
    card: {
        backgroundColor: "transparent", 
        boxShadow: "none", 
        borderRadius: 0, 
        height: "100%"
    },
    heading: {
        color: $white,
        fontFamily: "Poppins",
        fontWeight: 900,
        fontSize: "4em",
        textTransform: "uppercase", 
    },
    tags: {
        textTransform: "uppercase",
        color: $white,
        fontFamily: "Poppins, sans-serif",
        fontSize: "1em",
        fontWeight: 600,
        letterSpacing: 1,
        textAlign: "right",
    },
    content: {
        lineHeight: 0,
        marginBottom: 20,
        textAlign: "right",
        position: "relative",
        //top: "50%",
        "& .heading": {
            color: $white,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 900,
            fontSize: "3.5em",
            textTransform: "uppercase",
            textAlign: "left",
            marginTop: "-30px",
            marginBottom: "10px",
            zIndex: 99,
            //opacity: .8,
        },
        "& .button": {
            textDecoration: "none",
            textTransform: "uppercase",
            color: $white,
            padding: "5px 20px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1em",
            fontWeight: 500,
            letterSpacing: 2,
            border: `1px solid ${$pink}`,
            borderRadius: 0,
            backgroundColor: "transparent",
            margin: "7px",
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
        },
        "& .tags": {
            textTransform: "uppercase",
            color: $pink,
            fontFamily: "Poppins, sans-serif",
            fontSize: ".9em",
            fontWeight: 600,
            letterSpacing: 1,
            //float: "left",
            paddingTop: "20px",
            //paddingLeft: "10px",
            textAlign: "right",
            //margin: "7px",
        }
    },
    media: {
        position: "relative", 
        margin: 0,
        //backgroundColor: "#27292D",
        height: "100%",
        zIndex: -1,
        "& .image": {
            maxWidth: "100%",
            minHeight: "100%",
            margin : 0,
            display: "flex",
            backgroundPosition: "center",
            backgroundSize: "cover",
            // position: "absolute",
            borderRadius: 0,
            zIndex: -1,
            objectFit: "cover",
        },
        "& .tags": {
            textTransform: "uppercase",
            color: $pink,
            fontFamily: "Poppins, sans-serif",
            fontSize: "1em",
            fontWeight: 600,
            letterSpacing: 1,
            //marginLeft: "20px",
             position: "absolute",
           // width: "300px",
           // top: "17.7%", 
            //left: "-20%",
            //float: "left",
            //transform: "rotate(90deg)",
            //backgroundColor: $black,
            padding: "10px 15px",
            textAlign: "center",
            // border: "1px solid #ffcea2",
            // borderLeft: "none"
            // borderRight: "1px solid #ffcea2",
            // borderTop: "1px solid #ffcea2",
            //borderBottom: "1px solid #ffcea2",
        }
    },
    btn: {
        margin: "-20px 0px",
        // display: "flex",
        //justifyContent: "space-between",
    }
})

const Works = () => {
    const classes = useStyles();

    return (  
        <div>
            <div className={classes.container}>
                <Grid container spacing={7}>
                    {featured_works.map((it, idx) => {
                        return (
                            <Grid item xs={12} md={6} className={classes.grid}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <div className={classes.content}> 
                                            <Typography className="heading">{it.name}</Typography>
                                            <div className={classes.btn}>
                                                {(it.buttons).map((btn) => {
                                                    return (
                                                        <Button 
                                                            className="button" 
                                                            href={btn[1]}
                                                            target='_blank'
                                                        >{btn[0]}</Button> 
                                                    )
                                                })} 
                                            </div> 
                                            <div>
                                                <Typography className="tags">
                                                    {it.tags}
                                                </Typography>
                                            </div>                                          
                                        </div>
                                    </CardContent>
                                    <CardMedia className={classes.media}>
                                        <img 
                                            className="image" 
                                            src={it.image}
                                            alt=""
                                        /> 
                                        
                                    </CardMedia>
                                </Card>
                            </Grid>
                        ) 
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Works;

