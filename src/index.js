import  React from 'react';
import ReactDOM from 'react-dom';
////////////////////////////////////////////////////////////////////////////////////////////////////
class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state= {items: [], text: ''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.text.length ===0){
            return;
        }
        const newItem={
            text: this.state.text,
            id: Date.now(),
        };
        this.setState(state=>({
            items: state.items.concat(newItem),
            text: '',
        }));
    }
    handleChange(e){
        this.setState({text: e.target.value});
    }
    render(){
        return (
            <div>
                <h3>Список дел</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Что нужно сделать?
                    </label>
                    <input
                        type="text"
                        id='new-todo'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button>
                        Добавить №{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }
}
class TodoList extends React.Component{
    render(){
        return (
            <ul>
                {this.props.items.map(item=> (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(
    <TodoApp/>,
    document.querySelector('#root')
);