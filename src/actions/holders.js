import * as api from "../api"

export const getHolders = (id, page) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' })

        const { data } = await api.fetchHolders(id, page)

        dispatch({ type: 'FETCH_ALL', payload: data });

        dispatch({ type: 'END_LOADING' })
    } catch (error) {
        console.log(error.message)
    }
}

export const getHoldersBySearch = (id, searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: 'START_LOADING' })

        const { data: { data } } = await api.fetchHoldersBySearch(id, searchQuery)

        dispatch({ type: 'FETCH_BY_SEARCH', payload: data})

        dispatch({ type: 'END_LOADING' })
    } catch (error) {
        console.log(error)
    }
}

export const createHolder = (holder) => async (dispatch) => {
    try {
        
        const { data } = await api.createHolder(holder);

        dispatch({ type: 'CREATE', payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const updateHolder = (id, holder) => async (dispatch) => {
    try {

        const {data} = await api.updateHolder(id, holder)

        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteHolder = (id) => async (dispatch) => {
    try {

        dispatch({ type: 'START_LOADING' })

        await api.deleteHolder(id)

        dispatch({ type: 'DELETE', payload: id})

        dispatch({ type: 'END_LOADING' })
    } catch (error) {
        console.log(error);
    }
}