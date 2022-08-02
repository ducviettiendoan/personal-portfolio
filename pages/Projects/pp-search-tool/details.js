import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomAppbar from '../../../components/CustomAppbar';
import Sidebar from '../../../components/Sidebar';
import PPImageDetails from '../../../components/ppImageDetails';
import pp from "../../../img/pp.png";
import dll from "../../../img/dll.png";
import diagram from "../../../img/pp_search_tool_diagram.png";
import tech from "../../../img/docker_pack_search.png";
import metrics from "../../../img/metrics.png";
import dropZone from "../../../img/drop-zone.png";
import dynamicApp from "../../../img/dynamicapp.png";
import scilo from "../../../img/scilo.png";


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
      "&>div": {
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
      textAlign: "center",
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
    banner: {
      position: "relative",
      "&>div": {
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
    },
    pictureContainer: {
      padding: "16px",
    },
    contentContainer: {
      padding: "16px",
    },
    imageEdit: {
      borderRadius: "25px !important",
    },
    // scienceLogicImage:{
    //   minHeight: "75% !important",
    //   minWidth: "75% !important",
    // },
    animation: {
      transition: "3s !important",
    },
    paragraphSpace:{
      marginTop: "24px",
      marginBottom: "24px",
    },
    textCenter:{
        textAlign: "center",
    },
    flexColumnSpaceBetween:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    marginX4:{
        margin: "32px 0px",
    },
    borderThin:{ 
        border: "2px black solid !important"
    }
}));

export default function Details() {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery("(max-width:959px)");
  const imgContentOrder = useMediaQuery("(max-width:1279px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);  
  const [open, set] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  React.useEffect(()=>{
    Aos.init({duration: 3000, once: "true"})
  },[]);

  return (
    <div className={classes.root}>
        {match && (
            <CustomAppbar handleDrawerToggle = {handleDrawerToggle}/>
        )}
        <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
        />
      <div className={classes.content}>
        {match && <div className={classes.toolbar} />}
        <div className={classes.banner}>
            <Image src={scilo} alt="banner" />
        </div>
        <div>
          <div container style={{ padding: "5%" }}>
            <div className={classes.myselfTitle}>Demo</div>
            {/* College + Benit + ScienceLogic */}
            <div>
            <Grid container className={classes.marginX4}>
                <Grid item md ={6} sm={12}>
                    <Image src={diagram} alt="tool-diagram" className={classes.imageEdit} />
                    <div className={classes.textCenter}>Powerpack Search Tool workflow diagram</div>
                </Grid>
                <Grid item md ={6} sm={12} className={classes.flexColumnSpaceBetween}>
                    <Image src={tech} alt="tool-technology" className={classes.imageEdit} />
                    <div className={classes.textCenter}>Tool and Technologies</div>
                </Grid>
            </Grid>
            <Grid container className={classes.marginX4}>
                {!imgContentOrder && <PPImageDetails img={dropZone}/>}
                <Grid item md = {12} lg={5} className={classes.contentContainer} data-aos={imgContentOrder ? null : "fade-left"}>
                    <h3>Drop Zone</h3>
                    <div className={classes.paragraphSpace}>
                        This is a DropZone JS also a landing page of the app where you could drop your
                        ScienceLogic powerpack .em7pp file to the DropZone to handle the searching process.
                    </div>
                    <div className={classes.paragraphSpace}> 
                        As configured with Jquery and Django, this zone is able to take 1 file at a time but could
                        handle multiple users using it at the same time. By using Python multiprocessing and hooking
                        Django with Jquery effectively through JSON. Eventually, you could open 2 browsers for 2 different
                        file get processed at the same time.
                    </div>
                    <div className={classes.paragraphSpace}>After Drop Zone accepts the .em7pp file, users will be automatically redirected to a live log page</div>
                </Grid>
                {imgContentOrder && <PPImageDetails img={dropZone}/>}
            </Grid>

              <Grid container className={classes.marginX4}>
                <Grid item md={12} lg={5} className={classes.contentContainer} data-aos={imgContentOrder ? null : "fade-right"}>
                    <h3>Django Live Log</h3>
                    <div className={classes.paragraphSpace}>
                        After dropping the file, you will be redirect to a specific live log (or dll) based on
                        the file you just dropped. Each file will have it's unique dll url and get its own 
                        process status. The status includes events such as received file from Drop Zone, decoding (meaning
                        unzip the .em7pp file), parsing extracted file, and populating metadata to Postgres DB. After process is
                        successfully loaded, you will be directed to "/metrics" to see your pack data. 
                    </div>
                </Grid>
                <PPImageDetails img={dll}/>
              </Grid>

              <Grid container className={classes.marginX4}>
                {!imgContentOrder && <PPImageDetails img={metrics}/>}
                <Grid item md={12} lg={5} className={classes.contentContainer} data-aos={imgContentOrder ? null : "fade-left"}>
                    <h3>Metrics</h3>
                    <div className={classes.paragraphSpace}>
                        From dll, users land to this page and find total of the powerpacks and dynamicapp that is presented in
                        other tables below. This comes directly from our DB with reliable data.
                    </div>
                </Grid>
                {imgContentOrder && <PPImageDetails img={metrics}/>}
              </Grid>
              <Grid container className={classes.marginX4}>
                <Grid item md={12} lg={5} className={classes.contentContainer} data-aos={imgContentOrder ? null : "fade-right"}>
                    <h3>Metadata Tables</h3>
                    <div className={classes.paragraphSpace}>
                        In the nav bar, you could find 4 main tables with your pack metadata included. The powerpack
                        table represent the pack ID, name, pack version, revision, etc. For client convience in tracking the 
                        change in 1 pack, we also allow multiple version and revision of the same pack using composite key to 
                        store in the DB. Following the powerpack table are dynamic application table known as all the application that
                        are used in 1 powerpack to achieve user needs, collection object table or the data feild that are used in a powerpack, 
                        and Science Logic libraries used for each dynamic applications of a powerpack.
                    </div>
                </Grid>
                <PPImageDetails img={pp}/>
              </Grid>
              <Grid container className={classes.marginX4}> 
                {!imgContentOrder && <PPImageDetails img={dynamicApp}/>}
                <Grid item md={12} lg={5} className={classes.contentContainer} data-aos={imgContentOrder ? null : "fade-left"}>
                    <h3>Daily automatic pulling</h3>
                    <div style={{fontSize: "16px", fontWeight: "bold", color: "#96999e"}}>Something behind the scence</div>
                    <div className={classes.paragraphSpace}>
                        In receiving feedback from the Solution Team, especially from PMs who deeply understand client's
                        perpective and needs, we decided to create an automatic daily pull from Artifactory in which stores all the 
                        ScienceLogic released powerpacks for user's reference. We configured this feature along with the
                        watcher and used REST API method to get the powerpacks, process all the pulling file, and put them to the UI. Therefore, 
                        clients whenever use the tool will be provided with data of all the latest powerpack versions. 
                    </div>
                </Grid>
                {imgContentOrder && <PPImageDetails img={dynamicApp}/>}
              </Grid>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
