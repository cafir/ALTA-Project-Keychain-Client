import React, {useState} from "react";
import { Card, CardActions, CardContent, Button, Typography, List, ListItemButton, Collapse } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from './styles'
import DeleteIcon from "@material-ui/icons/Delete"

import { useDispatch } from "react-redux";

import { deleteHolder } from "../../../actions/holders";

const Holder = ({ holder, setCurrentId }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open)
    }
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
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteHolder(holder._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button> 
            </CardActions>
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