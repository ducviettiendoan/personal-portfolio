import React from "react";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import banner from "../img/banner.jpg";
import denison from "../img/denison-student.png";
import benit from "../img/benit-internship.png";
import Image from "next/image";
import ScrollAnimation from 'react-animate-on-scroll';
import clsx from "clsx";
// import "../components/Animation/animation.css";
import Aos from "aos";
import "aos/dist/aos.css";


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
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div className={classes.content}>
        {match && <div className={classes.toolbar} />}
        <div>
          <div className={classes.banner}>
            <Image src={banner} alt="banner" />
            <div className={classes.bannerTitle}>
              <div>My Passions &</div>
              <div>Personality</div>
            </div>
          </div>
          <div container style={{ padding: "10%" }}>
            <div className={classes.myselfTitle}>My journey</div>
            {/* College + Benit */}
            <div>
              <Grid container>
                <Grid item xs={4} className={classes.pictureContainer}>
                  <ScrollAnimation animateIn="fadeInLeft" className={classes.animation}>
                    <Image src={denison} alt="Denison" className={classes.imageEdit} />
                  </ScrollAnimation>
                </Grid>
                <Grid item xs={8} className={classes.contentContainer} data-aos="fade-left">
                  <h3>Denison University</h3>
                  <div>Class of 2024 - B.S in Computer Science</div>
                  <div>Granville, OH</div>
                  <div>
                    Duke presented unprecedented scale and diversity of opportunity.
                    My four years of phenomenal professors across the disciplines
                    pushed me to expand, challenge, and adjust my worldview.
                  </div>
                  <div>
                    My experience dancing with DefMo showed me the power of empathetic leadership and
                    expanded my artistic comfort zone. My tenure throwing major, campus-wide events validated
                    that quality stems from attention to detail. My junior fall semester abroad at London's UCL
                    humbled me to explore my place in the world. My engagement in Duke's tech & innovation initiatives
                    exercised my creative muscle, sparked my obsession with design, and strengthened my tolerance
                    to adversity. My internships at Google, Flipboard, and Pocket helped me discover my love for
                    building products that make people's lives better.
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={4} className={classes.pictureContainer}>
                  <ScrollAnimation animateIn="fadeInLeft" className={classes.animation}>
                    <Image src={benit} alt="Benit" className={classes.imageEdit} />
                  </ScrollAnimation>
                </Grid>
                <Grid item xs={8} className={classes.contentContainer} data-aos="fade-left">
                    <h3>Denison University</h3>
                    <div>B.S in Computer Science</div>
                    <div>Granville, OH</div>
                    <div>
                      Duke presented unprecedented scale and diversity of opportunity.
                      My four years of phenomenal professors across the disciplines
                      pushed me to expand, challenge, and adjust my worldview.
                    </div>
                    <div>
                      My experience dancing with DefMo showed me the power of empathetic leadership and
                      expanded my artistic comfort zone. My tenure throwing major, campus-wide events validated
                      that quality stems from attention to detail. My junior fall semester abroad at London's UCL
                      humbled me to explore my place in the world. My engagement in Duke's tech & innovation initiatives
                      exercised my creative muscle, sparked my obsession with design, and strengthened my tolerance
                      to adversity. My internships at Google, Flipboard, and Pocket helped me discover my love for
                      building products that make people's lives better.
                    </div>
                </Grid>
              </Grid>
            </div>
            <div>
            </div>
            <div className={classes.affirmationTitle}>
              Personal Affirmation
            </div>
            <div className={classes.affirmationBox}>
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
