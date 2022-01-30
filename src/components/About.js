import React from 'react';
import { Grid, makeStyles, Typography, Chip } from '@material-ui/core';
import me from '../assets/img/me2.jpg';

const skills = [
    "c/c++",
    "html",
    "css", 
    "reactjs",
    "javascript", 
    "typescript", 
    "python", 
    "java",
]

const useStyles = makeStyles({
    container: {
        backgroundColor: "rgba(0, 0, 0, .3)",
        zIndex: -1,
        position: "relative",
        textAlign: "center",
    },
    image: {
        position: "relative",
        height: "400px",
        border: "1px solid #FFCEA2",
        padding: "10px 10px",
    },
    content: {
        padding: "60px 80px",
        position: "relative",
        zIndex: 99,
        opacity: .6,
    },
    block: {
        margin: "10px 0px",
        textAlign: "left",
    },
    question: {
        color: "#FFCEA2",
        fontFamily: "Poppins",
        fontSize: "16px",
        letterSpacing: 3,
        lineHeight: 2,
        fontWeight: 700,
        textTransform: "uppercase",
    },
    answer: {
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "16px",
        letterSpacing: 1.5,
        lineHeight: 2,
        fontWeight: 300,
    },
    heading: {
        color: "#FFCEA2",
        fontFamily: "Poppins",
        fontWeight: 900,
        fontSize: "2em",
        textTransform: "uppercase",
    },
    chip: {
        border: "1px solid #FFCEA2", 
        borderRadius: 10,
        color: "#FFFFFF",
        margin: "5px 3px",
        padding: "2px 5px",
        fontFamily: "Poppins",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: 500
    }
})

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Grid container spacing={3} style={{width: "100%"}}>
                    <Grid item xs={12} s={12} md={4}>
                        <img 
                            className={classes.image}
                            src={me}
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={12} s={12} md={8} style={{border: "none"}}>
                        <div className={classes.block}>
                            <Typography className={classes.question}>Who am I?</Typography>
                            <Typography className={classes.answer}>
                                Hello, my name is Shamila Mariam Naiga. I am a software enigneering major 
                                at the Florida Institute of Technology, graduating May 2022. I am a natural-born
                                problem solver looking for a job opportunity that I can thrive in.
                            </Typography>
                        </div>
                        <div className={classes.block}>
                            <Typography className={classes.question}>What am I interested in?</Typography>
                            <Typography className={classes.answer}>
                                My main concentrations are, but aren't limited to,  web application development and 
                                data science. Learning new skills is what I love doing most, especially when it 
                                comes to coding and its various languages.
                            </Typography>
                        </div>
                        <div className={classes.block}>
                            <Typography className={classes.question}>What am I Good At?</Typography>
                            {skills.map((it) => {
                                return (
                                    <Chip label={it} variant="outlined" className={classes.chip}/>
                                )
                            })}
                        </div>
                        {/*<div className={classes.block}>
                            <Typography className={classes.question}>Contact Me</Typography>
                            <Typography className={classes.answer}>
                                My main concentrations are, but aren't limited to,  web application development and 
                                data science. Learning new skills is what I love doing most, especially when it 
                                comes to coding and its various languages.
                            </Typography>
                        </div>*/}
                    </Grid> 
                </Grid>
            </div>   
        </div>
    )
}
export default About;

