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
import posts from "../../img/posts.png";
import Head from 'next/head';

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
                {match && <div className={classes.toolbar} />}
                <Image src={posts} alt="Mern stack post" style={{ width: "100%" }} />
                <div className={classes.bodyContent}>
                    <div className={classes.linkToPte}>
                        <a href="https://ducdoan-mern-stack-post.web.app/" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                    <div className={classes.sectionTitle}>
                        Description
                    </div>
                    <div className={classes.descriptionDetail}>
                        A personal project using MERN stack to make a posting platform
                    </div>
                    <div className={classes.sectionTitle}>Tasks</div>
                    <ul className={classes.taskList}>
                        <li>Build posting front-end page with React, Redux Thunk, and CSS.</li>
                        <li>Using ExpressJS to make server side and connect to MongoDB database</li>
                        <li>Deploying frontend to Firebase and backend to Heroku</li>
                    </ul>
                    <div className={classes.sectionTitle}>Technologies</div>
                    <ul className={classes.technologyList}>
                        <li>React, Redux Thunk, JavaScript, CSS</li>
                        <li>ExpressJS, MongoDB</li>
                        <li>Firebase, Heroku</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
