export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return { ...state, holders: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages }
        case 'FETCH_BY_SEARCH':
            return { ...state, holders: action.payload}
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((holder) => holder._id === action.payload._id ? action.payload : holder)
        case 'DELETE':
            return state.filter((holder) => holder._id !== action.payload)
        default:
            return state
    }
}