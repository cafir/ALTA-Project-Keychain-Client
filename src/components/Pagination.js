import React, {useEffect} from "react";
import {Pagination, PaginationItem} from '@material-ui/lab'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles'

import { getHolders } from "../actions/holders";

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.holders)
    console.log(page)
    console.log(useSelector((state) => state.holders))
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if (page) {
            dispatch(getHolders(user?.result?._id || user?.result?.googleId, page))
        }
    }, [page]);

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary' 
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/holders?page=${item.page}`}/>
            )}
        />
    )
}

export default Paginate