import React, { useState, useEffect } from "react";

import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from "@material-ui/core"
import { useNavigate, useLocation } from "react-router-dom";
import Chip from 'material-ui-chip-input'


import Form from "../Form/Form";
import Holders from "../Holders/Holders";
import Navbar from "../Navbar/Navbar";

import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";


//redux
import { useDispatch } from "react-redux";

//action
import { getHolders, getHoldersBySearch } from "../../actions/holders";
import useStyles from './styles.js'

//pagination
import Pagination from "../Pagination";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])

    const searchHolder = () => {
        if (search.trim() || tags) {
            dispatch(getHoldersBySearch( user?.result?._id || user?.result?.googleId, { search, tags: tags.join(',') }))
            navigate(`/holders/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate('/')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchHolder()
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag])
    }

    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete))
    }

    return (
        <Grow in> 
            <Container className={classes.con}>
                <Grid  
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                        <Navbar/>

                        <Form currentId={currentId} setCurrentId={setCurrentId} page={page}/>
                        <AppBar className={classes.appBarSearch} position="static" color='inherit'>
                            <TextField 
                                className={classes.txt}
                                name="search" 
                                variant='outlined' 
                                label='Search by Username or Email' 
                                fullWidth
                                onKeyPress={handleKeyPress} 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className={classes.txt}
                            />
                            <Chip
                                className={classes.txt} 
                                style={{ margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label='Search Tags'
                                variant="outlined"
                                className={classes.txt}
                            />
                            <Button className={classes.buttonSubmit} onClick={searchHolder} variant='contained' color='primary'>Search</Button>
                        </AppBar>
                        <Holders setCurrentId={setCurrentId}/>
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page}/>
                        </Paper>
                </Grid>
                <AboutUs/>
                <ContactUs/>
            </Container>
        </Grow>
    )
    
}

export default Home;