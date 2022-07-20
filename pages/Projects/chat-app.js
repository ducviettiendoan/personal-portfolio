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
import chatApp from "../../img/chat-app.png";
import chatAppMobile from "../../img/chat-app-mobile.png"
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';


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
                <Carousel variant="dark" controls={false}>
                    <Carousel.Item> 
                        <Image
                        className="d-block w-100"
                        src={chatApp}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src={chatAppMobile}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={classes.bodyContent}>
                    <div className={classes.linkToPte}>
                        <a href="https://ducdoan-chat-app.web.app" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                    <div className={classes.sectionTitle}>
                        Description
                    </div>
                    <div className={classes.descriptionDetail}>
                        A customed Facebook Theme Chat App
                    </div>
                    <div className={classes.sectionTitle}>What has been done?</div>
                    <ul className={classes.taskList}>
                        <li>Build a front-end Facebook theme chat box allowing user to make conversations and new contacts</li>
                        <li>Using Socket.io to make a real time conversation between users</li>
                        <li>New notification alert feature is added with newest message get to the top of the conversation list</li>
                        <li>Deploying frontend to Firebase and backend to Heroku</li>
                    </ul>
                    <div className={classes.sectionTitle}>Technologies</div>
                    <ul className={classes.technologyList}>
                        <li>React, JavaScript, Bootstrap</li>
                        <li>NodeJs, Socket IO</li>
                        <li>Firebase, Heroku</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
