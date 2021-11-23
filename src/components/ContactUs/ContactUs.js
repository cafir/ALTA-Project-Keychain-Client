import React, {useState} from "react";
import { Collapse, Typography } from "@material-ui/core";
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
                    <img className={classes.icons} src={IG} href="https://www.instagram.com/keychain.project/" alt="ig"/>
                    <img className={classes.icons} src={TW} href="https://twitter.com/keychainproject" alt="tw"/>
                </div>

        </div>
    )
}

export default ContactUs;