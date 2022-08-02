import React from 'react';
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    pictureContainer: {
      padding: "16px",
    },
    imageEdit: {
      borderRadius: "25px !important",
    },
    animation: {
      transition: "3s !important",
    },
}));
export default function PPImageDetails(props) {
  const classes = useStyles();
  return (
    <Grid item md ={12} lg = {7} className={classes.pictureContainer}>
        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft" className={classes.animation}>
            <Image src={props.img} alt="drop-zone" className={`${classes.imageEdit}`} />
        </ScrollAnimation>
    </Grid>
  )
}
