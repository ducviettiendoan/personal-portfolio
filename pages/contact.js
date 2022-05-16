import React from "react";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Image from "next/image";
import contact from "../img/contact_me.jpg";
import CustomAppbar from "../components/CustomAppbar";
import { SocialIcon } from 'react-social-icons';

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
  contactBox: {
    marginTop: "24px",
    border: "1px solid #e1a87a",
    textAlign: "center",
    padding: "40px",
  },
  contactText: {
    color: "#151515",
    fontSize: "3vw",
    fontWeight: 700,
    marginBottom: "24px",
    fontfamily: "serif",
  },
  otherContactText: {
    color: "#151515",
    fontSize: "4vw",
    fontWeight: 700,
    marginBottom: "16px",
    fontfamily: "serif",
  },
  contactNumber: {
    fontSize: "2.7vw",
    color: "#121212",
    fontWeight: 300,
    marginBottom: "24px",
  },
  facebookIconContainer: {
    marginRight: "16px",
    "&>div": {
      height: "2.7vw",
      width: "2.7vw",
      borderRadius: "50%",
    },
  },
  instaIconContainer: {
    "&>div": {
      height: "3vw",
      width: "3vw",
      borderRadius: "50%",
    },
    "&>div>img": {
      top: "5px !important",
    },
  },
  linkedinIconContainer: {
    marginRight: "16px",
    "&>div": {
      height: "3.2vw",
      width: "3.2vw",
      borderRadius: "50%",
    },
    "&>div>img": {
      top: "10% !important",
    },
  },
  facebookIconContainer: {
    marginRight: "16px",
    "&>div": {
      height: "2.7vw",
      width: "2.7vw",
      borderRadius: "50%",
    },
  },

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
            <Image src={contact} alt="Contact" />
            <div className={classes.bannerTitle}>
              <div>Connect with</div>
              <div>Me today</div>
            </div>
          </div>
          <div className={classes.contactBox}>
            <div className={classes.contactText}>
              Or reach out to me directly.
            </div>
            <div className={classes.contactNumber}>
              <div>Call 740-405-9323</div>
              <div>Email ducviettiendoan@gmail.com</div>
            </div>
            <div className={classes.otherContactText}>Or</div>
            <div>
              <a className={classes.linkedinIconContainer} href="https://www.linkedin.com/in/ducviettiendoan/" target="_blank" rel="noreferrer">
                <SocialIcon url="https://www.linkedin.com/in/ducviettiendoan/" />
              </a>
              <a className={classes.facebookIconContainer} href="https://www.facebook.com/profile.php?id=100028369741494" target="_blank" rel="noreferrer">
                <SocialIcon url="https://www.facebook.com/profile.php?id=100028369741494" />
              </a>
              <a className={classes.instaIconContainer} href="https://www.instagram.com/tduc.02/" target="_blank" rel="noreferrer">
                <SocialIcon url="https://www.instagram.com/tduc.02/" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}