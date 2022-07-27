import React from "react";
import Sidebar from "../../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import dropZone from "../../img/drop-zone.png";
import dll from "../../img/dll.png";
import metrics from "../../img/metrics.png";
import pp from "../../img/pp.png";
import dynamicApp from "../../img/dynamicapp.png";
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import Link from "next/link";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        fontFamily: "Hina Mincho, serif",
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
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
    gridItem: {
        padding: "0 16px !important",
    },
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
    linkToPte: {
        fontFamily: "serif",
        fontWeight: 700,
        fontSize: "24px",
        margin: "16px 0px",
        textDecoration: "underline",
        "&>a:hover": {
            color: '#551A8B',
        }
    },
    roleList: {
        listStyle: "circle",
    },
    taskList: {
        listStyle: "square",
    },
    technologyList: {
        listStyle: "decimal"
    },
    sectionTitle: {
        fontFamily: "cursive",
        fontWeight: 500,
        fontSize: "1.5rem",
    },
    descriptionDetail: {
        margin: "16px 0px",
        fontFamily: "Hina Mincho, serif",
    },
    bodyContent: {
        padding: "0 13%",
    },
    pjDetail:{
        fontSize: "24px",
        cursor: "pointer",
        textDecoration: "underline",
        color: "#0d6efd",
        "&:hover": {
            color: '#551A8B',
        }
    }
}));

export default function ChatApp() {
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
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap" ßß
                    rel="stylesheet"
                />
            </Head>
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
                
                {/* {match && <div className={classes.toolbar} />} */}
                {/* <Image src={chatApp} alt="Mern stack post" style={{ width: "100%" }} /> */}
                <Carousel variant="dark" controls={true}>
                    <Carousel.Item> 
                        <Image
                        className="d-block w-100"
                        src={dropZone}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={dll}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={metrics}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={pp}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={dynamicApp}
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={classes.bodyContent}>
                    <Link href="/Projects/pp-search-tool/details">
                        <div className={classes.pjDetail}>
                            Tool Functionality Walkthrough
                        </div>
                    </Link> 
                    <div className={classes.sectionTitle}>
                        Description
                    </div>
                    <div className={classes.descriptionDetail}>
                        A search engine tool that resolve instantly ScienceLogic customer and developers questions 
                        related to Scilo PowerPack metadata.
                    </div>
                    <div className={classes.sectionTitle}>Role</div>
                    <ul className={classes.taskList}>
                        <li>Worked as a Lead developer of the PơwerPack Search Tool project mainly associated with 
                            2 more ScienceLogic Software Engineers and a small Solution Team includes developers, PM, QA,
                            and Scrum Manager.
                        </li>
                        <li>Created Jira Stories based on the progress of the projects.</li>
                        <li>Managed 3 Docker containers for Python Django, Redis cache, and Postgres DB.</li>
                        <li>Wrote Python Script to implement search tool functionality and collaboated with Solution team 
                            to write unit tests.
                        </li>
                        <li>Successfully presented and demo PowerPack Search Tool solution in ScienceLogic 2022 Internship Program
                            with high approvals for further development for this tool to become a released tool for ScienceLogic clients.
                        </li>
                    </ul>
                    <div className={classes.sectionTitle}>Technologies</div>
                    <ul className={classes.technologyList}>
                        <li>Python3, Django, SQL</li>
                        <li>HTML CSS, JQuery, DataTable, DropZoneJS, Bootstrap</li>
                        <li>Docker, Redis, Artifactory, Linux Unix Host</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
