import React from "react";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import denison from "../img/denison-student.png";
import ducdoan from "../img/duc_doan_about.jpg";
import benit from "../img/benit-internship.png";
import Image from "next/image";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";
import CustomAppbar from "../components/CustomAppbar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "20%",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  titleUnderline: {
    height: "5px",
    width: "75px",
    background: "black",
    borderRadius: "12px",
  },
  bioContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  gridItem: {
    padding: "0 16px !important",
    "&>div": {
      width: "100%",
    }
  },
  myselfTitle: {
    fontFamily: "serif",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "48px",
    letterSpacing: ".025em",
    textTransform: "none",
    lineHeight: "normal",
    marginBottom: "16px",
    textAlign: "center",
  },
  affirmationTitle: {
    fontStyle: "italic",
    margin: "16px 0px",
  },
  affirmationBox: {
    display: "flex",
    justifyContent: "center",
  },
  affirmationContainer: {
    width: "60%",
    background: "#CCCCCC",
    padding: "1.5em",
  },
  affirmationContent: {
    color: "#3D3D3D",
    fontSize: "24px",
    textAlign: "center",
  },
  banner: {
    position: "relative",
    "&>div": {
      width: "100%",
    }
  },
  bannerTitle: {
    position: "absolute",
    top: "35%",
    left: "8%",
    color: "#FFFFFF",
    fontSize: "5vw",
    fontFamily: "serif",
    fontWeight: 700,
    width: "90% !important",
  },
  pictureContainer: {
    padding: "16px",
  },
  contentContainer: {
    padding: "16px",
    paddingTop: "0px"
  },
  imageEdit: {
    borderRadius: "25px !important",
  },
  animation: {
    transition: "3s !important",
  },
  paragraphSpace:{
    marginTop: "24px",
    marginBottom: "24px",
  }
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery("(max-width:959px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, set] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleScrollAnimation = () => {
    set(open => !open);
  }
  console.log(mobileOpen);

  React.useEffect(()=>{
    Aos.init({duration: 3000})
  },[])
  return (
    <div className={classes.root}>
      {match && (
        <CustomAppbar handleDrawerToggle = {handleDrawerToggle}/>
      )}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div className={classes.content}>
        {match && <div className={classes.toolbar} />}
        <div>
          <div className={classes.banner}>
            <Image src={ducdoan} alt="banner" />
            <div className={classes.bannerTitle}>
              <div>My Passions</div>
              <div>and</div>
              <div>Personality</div>
            </div>
          </div>
          <div container style={{ padding: "10%" }}>
            <div className={classes.myselfTitle}>My journey</div>
            {/* College + Benit */}
            <div>
              <Grid container>
                <Grid item md ={12  } lg = {5} className={classes.pictureContainer}>
                  <ScrollAnimation animateIn="fadeInLeft" className={classes.animation}>
                    <Image src={denison} alt="Denison" className={classes.imageEdit} />
                  </ScrollAnimation>
                </Grid>
                <Grid item md = {12} lg={7} className={classes.contentContainer} data-aos="fade-left">
                  <h3>Denison University</h3>
                  <div>Class of 2024 - B.S in Computer Science</div>
                  <div>Granville, OH</div>
                  <div className={classes.paragraphSpace}>
                    Denison presented unprecedented scale and diversity of opportunity.
                    My four years of phenomenal professors across all departments
                    pushed me to expand, challenge, and adjust my worldview.
                  </div>
                  <div>
                    At Denison, I have an opportunity to learn fundametal and advanced knowledge about Computer Science such as:
                    Introduction to CS, Algorithm and Data Structure, Algorithm Design and Analysis. Additionally, I also work as a 
                    Service Desk Assistant on campus. Being a part of Denison's IT Service helps me enhance my computer troubleshooting 
                    and customer service skill. 
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item md = {12} lg={5} className={classes.pictureContainer}>
                  <ScrollAnimation animateIn="fadeInLeft" className={classes.animation}>
                    <Image src={benit} alt="Benit" className={classes.imageEdit} />
                  </ScrollAnimation>
                </Grid>
                <Grid item md={12} lg={7} className={classes.contentContainer} data-aos="fade-left">
                    <h3>Benit Academy</h3>
                    <div>Junior Web developer</div>
                    <div>Hanoi, Vietnam</div>
                    <div className={classes.paragraphSpace}>
                      Benit mission is to escort all IT learners in education and employment in Australia, the USA, 
                      and other countries. We assist our members in career orientation, skills training, and enhancement 
                      as well as expanding their professional social circles.
                    </div>
                    <div>
                      My experience with Benit showed me the power of self-learning and team-work. 
                      By completed a Codecademy Full-stack engineer certificate, I was able to gradually join 
                      in some team projects (mainly commercial projects). While working with the team, I improved my 
                      programing skill and gained a lot of experience from knowledge to tips. With the help of my teammates
                      and my mentor, I built several front-end pages with React, Redux and also experienced NodeJs, Express,
                      and Java SpringBoot. Furthermore, I was trained to work with Git and some fundametal commands to manage
                      the team project.
                    </div>
                </Grid>
              </Grid>
            </div>
            <div>
            </div>
            <div className={classes.affirmationTitle} data-aos="fade-right">
              Personal Affirmation
            </div>
            <div className={classes.affirmationBox} data-aos="slide-up">
              <div className={classes.affirmationContainer}>
                <p className={classes.affirmationContent}>
                  Small changes compound to a huge difference
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
