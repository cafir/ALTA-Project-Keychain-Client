import React from "react";
import { Typography, Link } from "@material-ui/core";
import useStyles from "./styles";
import Logo from "../../images/KeyChainWarna.png"
import IG from "../../images/instagram.png"
import TW from "../../images/twitter.png"


const ContactUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.contactUs}>
                <img className={classes.logo} src={Logo} alt="logo"/>
                <Typography className={classes.title}>
                    Follow KeyChain
                </Typography>
                <div className={classes.icon}>
                    <a href="https://www.instagram.com/keychain.project/" target="_blank" rel="noreferrer">
                        <img className={classes.icons} src={IG} alt="ig"/>
                    </a>
                    <a href="https://twitter.com/keychainproject" target="_blank" rel = "noreferrer">
                        <img className={classes.icons} src={TW} alt="tw"/>
                    </a>
                </div>
        </div>
    )
}

export default ContactUs;