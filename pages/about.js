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
import town from "../img/town.jpg";
import banner from "../img/banner.jpg";
import Image from "next/image";

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
    "&>div":{
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
  banner:{
    position: "relative",
    "&>div":{
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
  }
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery("(max-width:959px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  console.log(mobileOpen);
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
            <Image src={banner} alt="banner"/>
            <div className={classes.bannerTitle}>
              <div>My Passions &</div>
              <div>Personality</div>
            </div>
          </div>
          <Grid container style={{ padding: "48px" }}>
            <Grid item sm={12} md={5} className={classes.gridItem}>
              <Image src={town} alt="Town" style={{width: "100%"}}/>
            </Grid>
            <Grid
              item
              sm={12}
              md={7}
              className={`${classes.bioContainer} ${classes.gridItem}`}
            >
              <div className={classes.myselfTitle}>About myself</div>
              <div>
                I am a fullstack-web developer that have years of experience
                with MERN stack and other web technologies. I also have a desire
                to learn more on Flutter in mobile development.
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
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
