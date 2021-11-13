export default (holders = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...holders, action.payload];
        case 'UPDATE':
            return holders.map((holder) => holder._id === action.payload._id ? action.payload : holder)
        case 'DELETE':
            return holders.filter((holder) => holder._id !== action.payload)
        default:
            return holders
    }
}