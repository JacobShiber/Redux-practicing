const todosReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TODO":
            return [...state, payload];

        default:
            return state;
    }
}

export default todosReducer;