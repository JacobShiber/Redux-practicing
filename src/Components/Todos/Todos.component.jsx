import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../Redux/Actions/todos';

const Todos = (props) => {
    const [text, setText] = useState("");

    return (
        <div>
            <div>
                <input type="text" onChange = {(e) => setText(e.target.value)}/>
                <button onClick = {() => props.addTodos(text)}>Add</button>
            </div>
            {
                props.todos.map((todo, i) =>
                    <h2 key={i}>{todo.title}</h2>
                )
            }
        </div>
    )
}

export default connect((state) => ({ todos: state.todos }), { addTodos })(Todos);