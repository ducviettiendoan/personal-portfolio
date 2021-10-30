import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


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
        backgroundColor: "#0a0e10",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },  

}));

export default function CustomAppbar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const match = useMediaQuery("(max-width:959px)");

    return (

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Duc Doan
                </Typography>
            </Toolbar>
        </AppBar>

    );
}
