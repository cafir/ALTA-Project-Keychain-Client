import React, {useState} from "react";
import { Card, CardActions, Button, Typography, List, Collapse, Modal, Box } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from './styles'
import DeleteIcon from "@material-ui/icons/Delete"
import IconError from "../../../images/error.png";
import { useDispatch } from "react-redux";

import { deleteHolder } from "../../../actions/holders";

const Holder = ({ holder, setCurrentId }) => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open)
    }
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const buttonDelete = () => dispatch(deleteHolder(holder._id));
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{holder.tags.map((tag) => `#${tag} `)}</Typography>
                <Button 
                style={{color: 'grey'}} 
                size="small" 
                onClick={() => setCurrentId(holder._id)}>
                    <MoreHorizIcon font="default" />
                </Button>
            </div>
            <div className={classes.isi}>
            <Typography onClick={handleClick} className={classes.title} variant="h6" gutterBottom>{holder.name}</Typography>
            <CardActions onClick={handleOpen} className={classes.cardActions}>
                <Button size="small" color="primary" >
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button> 
            </CardActions>
            <Modal
                open={openModal}
            >
                <Box>
                    <div className={classes.modalDelete}>
                        <img className={classes.modalDeleteImg} src={IconError} alt="iconError"/>
                        <Typography variant="h6">Are you sure want to delete?</Typography>
                        <Typography variant="body2" color="textSecondary">{holder.tags.map((tag) => `"${tag} ${holder.name}"`)}</Typography>
                        <div className={classes.btnYesNo}> 
                            <Button className={classes.btnYes} onClick={() => dispatch(deleteHolder(holder._id))}>Yes</Button>
                            <Button className={classes.btnNo} onClick={handleClose}>No</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
            </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
            <div className={classes.passIsi}>
            <Typography variant="h8" gutterBottom>{holder.password}</Typography>
            </div>
        </List>
        </Collapse>
        </Card>
        
    )
}

export default Holder;