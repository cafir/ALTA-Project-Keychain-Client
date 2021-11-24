import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Modal, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useStyles from './styles'
import keyChainLogo from '../../images/KeyChainPutih.png';
import keyChainLogoWarna from "../../images/KeyChainWarna.png";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/auth");

    setUser(null);
  };

  const handleHome = () => {
    navigate("/");
  }

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

    return ( 
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img onClick={handleHome} className={classes.imageNavbar} src={keyChainLogo} alt="icon"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? ( 
                    <div className={classes.profile}>
                        <Avatar onClick={handleOpen} className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className={classes.styleModal}>
                                <img className={classes.logoModal} src={keyChainLogoWarna} alt="logoWarna"/>
                                <div className={classes.subStyleModal}>
                                    <div className={classes.subSubStyleModal}>
                                        <Avatar onClick={handleClose} className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                        <Typography className={classes.userName} >{user.result.name}</Typography>
                                    </div>
                                    <Button className={classes.logout} onClick={logout}>Logout</Button>
                                </div>
                            </Box>
                        </Modal>
                        
                    </div>
                ) : (
                    <Button component={Link} to="/auth" className={classes.log}>Login</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
