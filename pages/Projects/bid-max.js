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
import pteMagic from "../../img/bid_max_preview.png";
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
                <Image src={pteMagic} alt="PTE MAGIC preview" style={{ width: "100%" }} />
                <div className={classes.bodyContent}>
                    <div className={classes.linkToPte}>
                        <a href="https://max2bid.com" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                    <div className={classes.sectionTitle}>
                        Description
                    </div>
                    <div className={classes.descriptionDetail}>
                        A bidding service and E-commerce platform for construction machines including
                        both client platform and system admin for managers. 
                    </div>
                    <div className={classes.sectionTitle}>Role</div>
                    <ul className={classes.roleList}>
                        <li>Work as a full-stack developer in a team of 5 members</li>
                        <li>Discuss with customer and UI/UX designer for the final product</li>
                        <li>Write, refactor, and test code casually with the team</li>
                    </ul>
                    <div className={classes.sectionTitle}>Tasks</div>
                    <ul className={classes.taskList}>
                        <li>Build client and admin pages with React, TypeScript, Redux Thunk, and CSS.</li>
                        <li>Connect frontend with server and to database by testing API.</li>
                        <li>Created API endpoints with Java Spring Boot and PostGreSQL for blogging service.</li>
                    </ul>
                    <div className={classes.sectionTitle}>Technologies</div>
                    <ul className={classes.technologyList}>
                        <li>React, Redux Thunk, CSS, Material UI, TextEditor.</li>
                        <li>Java SpringBoot</li>
                        <li>PostGreSQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
