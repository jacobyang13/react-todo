var React = require('react');
var {connect} = require('react-redux')
var actions = require('actions')

export class AddTodo extends React.Component{

  handleSubmit (e){
    e.preventDefault();
    var{dispatch} = this.props;
    var todo= this.refs.todo.value;

    if(todo.length > 0){
      this.refs.todo.value = '';
      dispatch(actions.addTodo(todo))
    } else{
      this.refs.todo.focus();
    }

  }

  render() {
    return(
      <div className = "container__footer">
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input type = "text" ref ="todo" placeholder = "What do you need to do?"/>
          <button className = "button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}
export default connect()(AddTodo);
