import React from "react";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import portfolio from "../img/portfolio.jpg";
import metrics from "../img/metrics.png";
import pteMagic from "../img/pte-magic-preview.png";
import bidMax from "../img/bid_max_preview.png";
import posts from "../img/posts.png";
import nauvusPreview from "../img/nauvus-preview.png";
import nasaScrap from "../img/nasa-scrapping.png"
import flaskMvc from "../img/flaskMvc.png"
import chatApp from "../img/chat-app.png";
import Link from "next/link";
import CustomAppbar from "../components/CustomAppbar";


const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "&>header": {
      backgroundColor: "#0a0e10",
    }
  },
  content: {
    flexGrow: 1,
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
    "&>div": {
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
  cardContainer: {
    margin: "0 0 32px 0",
  },
  imagePreview: {
    width: "100%"
  },
  imagePreviewRange: {
    minWidth: "80% !important",
  },
  description: {
    fontFamily: "san-serif",
    fontSize: 14,
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery("(max-width:959px)");
  const minRangeImg = useMediaQuery("(min-width: 600px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  console.log(mobileOpen);
  console.log(match);
  console.log(minRangeImg);
  return (
    <div className={classes.root}>
      {match && (
        <CustomAppbar handleDrawerToggle={handleDrawerToggle} />
      )}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div className={classes.content}>
        {match && <div className={classes.toolbar} />}
        <div>
          <div className={classes.banner}>
            <Image src={portfolio} alt="banner" />
            <div className={classes.bannerTitle}>
              <div>Duc Doan</div>
              <div>Portfolio</div>
            </div>
          </div>
          <Card className={classes.introBox}>
            <div className={classes.introTitle}>I am a dedicated developer</div>
            <div className={classes.introContent}>
              Worked as a Junior Web Developer and Solution Engineering Intern with an impressive background of
              front-end development, back-end development, and problem solving skill. I would love to experience and learn
              much more on this journey to become a Software Engineer. Below you'll find a selection of some of my most recent 
              projects that showcase the type of website and application I work closely with.
            </div>
          </Card>
          {/* Display Projects */}
          <div className={classes.projectBox}>
            <div className={classes.pjHeader}>My Projects</div>
            <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  {match && minRangeImg ? <Image src={metrics} alt="scilo_pp_search_tool" className={classes.imagePreviewRange} /> : <Image src={metrics} alt="scilo_pp_search_tool" className={classes.imagePreview} />}
                  <div className={classes.projectName}>
                    Scilo PowerPack Search Tool
                  </div>
                  <Link href="/Projects/pp-search-tool">
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
                  {match && minRangeImg ? <Image src={pteMagic} alt="pte-magic" className={classes.imagePreviewRange} /> : <Image src={pteMagic} alt="pte-magic" className={classes.imagePreview} />}
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
                  {match && minRangeImg ? <Image src={bidMax} alt="bid-max" className={classes.imagePreviewRange} /> : <Image src={bidMax} alt="bid-max" className={classes.imagePreview} />}
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
                  {match && minRangeImg ? <Image src={nauvusPreview} alt="nauvus" className={classes.imagePreviewRange} /> : <Image src={nauvusPreview} alt="nauvus" className={classes.imagePreview} />}
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
                    {match && minRangeImg ? <Image src={chatApp} alt="posts-page" className={classes.imagePreviewRange} /> : <Image src={chatApp} alt="posts-page" className={classes.imagePreview} />}
                    <div className={classes.projectName}>
                      A customed chat app 
                    </div>
                    <Link href="/Projects/chat-app">
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
                  {match && minRangeImg ? <Image src={posts} alt="posts-page" className={classes.imagePreviewRange} /> : <Image src={posts} alt="posts-page" className={classes.imagePreview} />}
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
              <Grid item sm={12} md={5} className={classes.cardContainer}>
                <Card className={classes.pjCard}>
                  {match && minRangeImg ? <Image src={nasaScrap} alt="nasa" className={classes.imagePreviewRange} /> : <Image src={nasaScrap} alt="nasa" className={classes.imagePreview} />}
                  <div className={classes.projectName}>
                    <div style={{ marginBottom: "12px" }}> Nasa Web Scrapping</div>
                    <div className={classes.description}>
                      A small project scrapping Nasa Web Image Api. Using an API endpoint, this website displays
                      all the Spacetagram images captured by Nasa 
                    </div>
                    <div className={classes.description}>Technologies: ReactJs, Redux Thunk, CSS</div>
                  </div>
                  <Link href="https://ducviettiendoan.github.io/nasa-scrapping/">
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
                  {match && minRangeImg ? <Image src={flaskMvc} alt="posts-page" className={classes.imagePreviewRange} /> : <Image src={flaskMvc} alt="posts-page" className={classes.imagePreview} />}
                  <div className={classes.projectName}>
                    <div style={{ marginBottom: "12px" }}>Flask MVC API Testing</div>
                    <div className={classes.description}>
                      A simple table using MVC API method to accomplish 4 fundamental HTTP requests.
                    </div>
                    <div className={classes.description}>Technologies: Flask HTML and CSS</div>
                  </div>
                  <Link href="https://ducdoanflaskmvc.herokuapp.com">
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
