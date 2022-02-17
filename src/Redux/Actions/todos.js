export const addTodos = (text) => {
    return (dispatch) => {
        const todo = {title: text, isComplete : false};
        dispatch({type: "ADD_TODO", payload: todo});
    }
}