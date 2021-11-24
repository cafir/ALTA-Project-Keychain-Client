export default (state = { isLoading: true, holders: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true}
        case 'END_LOADING':
            return { ...state, isLoading: false}
        case 'FETCH_ALL':
            return { ...state, holders: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages }
        case 'FETCH_BY_SEARCH':
            return { ...state, holders: action.payload}
        case 'CREATE':
            return { ...state, holders: [...state.holders, action.payload] };
        case 'UPDATE':
            return { ...state, holders: state.holders.map((holder) => holder._id === action.payload._id ? action.payload : holder)}
        case 'DELETE':
            return { ...state, holders: state.holders.filter((holder) => holder._id !== action.payload)}
        default:
            return state
    }
}