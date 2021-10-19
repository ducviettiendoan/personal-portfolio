import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "next/link";

const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  drawerPaper2: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      background: "white",
      "&>div>div:nth-of-type(2)": {
        width: "100%",
      },
    },
  },
  smallMarginLeft: {
    marginLeft: "8px",
  },
  section: {
    display: "flex",
  },
  underline: {
    width: "0%",
    height: "2px",
    background: "#3D3D3D",
    transition: "0.5s ease all ",
  },
  portfolioNameBox: {
    padding: "32px 10px",
  },
  portfolioName: {
    color: "#3D3D3D",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.6,
  },
  portfolioNameMark: {
    width: "32px",
    background: "black",
    height: "3px",
    marginTop: "16px",
  },
}));

function Sidebar(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpenSidebar, setMobileOpenSidebar] = React.useState(mobileOpen);

  React.useEffect(() => {
    setMobileOpenSidebar(mobileOpen);
  }, [mobileOpen]);

  const handleDrawerToggleSmall = () => {
    setMobileOpenSidebar((prev) => !prev);
    handleDrawerToggle();
  };

  console.log(mobileOpenSidebar);
  const drawer = (
    <div>
      <div className={classes.portfolioNameBox}>
        <div className={classes.portfolioName}>Duc Doan Portfolio</div>
        <div className={classes.portfolioNameMark}></div>
      </div>
      <List>
        <Link href="/">
          <ListItem button key={"portfolio"} className={classes.navSection}>
            <div>
              <div className={classes.section}>
                <DescriptionIcon />
                <a className={classes.smallMarginLeft}>Portfolio</a>
              </div>

              <div className={classes.underline} />
            </div>
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button key={"about"} className={classes.navSection}>
            <div>
              <div className={classes.section}>
                <PersonIcon />
                <a className={classes.smallMarginLeft}>About</a>
              </div>
              <div className={classes.underline} />
            </div>
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button key={"contact"} className={classes.navSection}>
            <div>
              <div className={classes.section}>
                <PermPhoneMsgIcon />
                <a className={classes.smallMarginLeft}>Contact</a>
              </div>
              <div className={classes.underline} />
            </div>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpenSidebar}
          onClose={handleDrawerToggleSmall}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper2,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
