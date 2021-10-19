import React from "react";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import bannerPortfolio from "../img/banner-portfolio.jpg";
import pteMagic from "../img/pte-magic-preview.png";
import bidMax from "../img/bid_max_preview.png";
import posts from "../img/posts.png";
import nauvusPreview from "../img/nauvus-preview.png";
import Link from "next/link";


const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  banner: {
    position: "relative",
    "&>div": {
      width: "100%",
    },
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
  introBox: {
    padding: "20vh 6vw",
    textAlign: "center",
  },
  introTitle: {
    color: "#151515",
    fontSize: "4vw",
    fontWeight: 700,
    marginBottom: "40px",
    fontFamily: "serif",
    lineHeight: "normal",
  },
  introContent: {
    fontSize: "2vw",
    color: "#121212",
    lineHeight: "normal",
    fontWeight: 300,
  },
  projectBox: {
    padding: "12vh 6vw",
  },
  viewPjButton: {
    width: "100%",
    border: "2px solid black",
    background: "white",
    "&:hover": {
      background: "white",
    },
    "&:focus": {
      background: "white",
    },
  },
  projectName: {
    color: "#3D3D3D",
    fontSize: "16px",
    padding: "32px 0px",
    height: "35% !important",
  },
  pjCard: {
    borderRadius: "12px",
    padding: "16px",
    height: "100% !important",
    "&>div":{
      height: "50%",
    }
  },
  pjHeader: {
    textAlign: 'center',
    color: "#151515",
    fontSize: "3vw",
    fontFamily: "serif",
    fontWeight: 700,
    marginBottom: "24px",
  },
  cardContainer:{
    margin: "0 0 32px 0",
  }
}));

export default function Home() {
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
            <Image src={bannerPortfolio} alt="banner" />
            <div className={classes.bannerTitle}>
              <div>Benit</div>
              <div>Portfolio</div>
            </div>
          </div>
          <Card className={classes.introBox}>
            <div className={classes.introTitle}>I am a dedicated developer</div>
            <div className={classes.introContent}>
              Worked as a Junior Web Developer with an impressive background of 
              front-end development. Exprienced server side technologies and would 
              love to become a full-stack engineer. Below you'll find a selection
              of some of my most recent projects that showcase the type
              of website I work closely with.
            </div>
          </Card>
          {/* Display Projects */}
          <div className={classes.projectBox}>
            <div className={classes.pjHeader}>My Projects</div>
            <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  <Image src={pteMagic} alt="pte-magic" className={classes.imagePrview}/>
                  <div className={classes.projectName}>
                    PTE Magic - Sass English Platform
                  </div>
                  <Link href="/Projects/pte-magic">
                    <Button className={classes.viewPjButton}>
                      <div className={classes.section}>
                        View Project
                      </div>
                    </Button>
                  </Link>
                </Card>
              </Grid>
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  <Image src={bidMax} alt="bid-max" className={classes.imagePrview}/>
                  <div className={classes.projectName}>
                    Bid Max - Bidding Platform for construction machines
                  </div>
                  <Link href="/Projects/bid-max">
                    <Button className={classes.viewPjButton}>
                      <div className={classes.section}>
                        View Project
                      </div>
                    </Button>
                  </Link>
                </Card>
              </Grid>
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  <Image src={nauvusPreview} alt="bid-max" className={classes.imagePrview}/>
                  <div className={classes.projectName}>
                    Nauvus - An IoT start up similar to Samsara
                  </div>
                  <Link href="/Projects/nauvus">
                    <Button className={classes.viewPjButton}>
                      <div className={classes.section}>
                        View Project
                      </div>
                    </Button>
                  </Link>
                </Card>
              </Grid>
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  <Image src={posts} alt="bid-max" className={classes.imagePrview}/>
                  <div className={classes.projectName}>
                    MERN stack personal project - A posts web page
                  </div>
                  <Link href="/Projects/posts">
                    <Button className={classes.viewPjButton}>
                      <div className={classes.section}>
                        View Project
                      </div>
                    </Button>
                  </Link>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
