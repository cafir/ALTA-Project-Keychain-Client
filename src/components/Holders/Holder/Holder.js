import React from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from './styles'
import DeleteIcon from "@material-ui/icons/Delete"

import { useDispatch } from "react-redux";

import { deleteHolder } from "../../../actions/holders";

const Holder = ({ holder, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
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
            <Typography className={classes.title} variant="h6" gutterBottom>{holder.name}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteHolder(holder._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button> 
            </CardActions>
            </div>
            <div className={classes.passIsi}>
            <Typography className={classes.pass} variant="h8" gutterBottom>{holder.password}</Typography>
            </div>
        </Card>
    )
}

export default Holder;