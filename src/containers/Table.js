import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../actions/actionCreator";

class Table extends Component {

	 render() {
			return (
				<div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
					 {this.props.todos.length !== 0 ?
						 (<table
							 style={{marginTop: "60px"}}
							 className="table table-hover"
						 >
								<thead>
								<tr className='text-center'>
									 <th scope="col">Email</th>
									 <th scope="col">Username</th>
									 <th scope="col">Todos</th>
									 <th scope="col">Actions</th>
								</tr>
								</thead>
								<tbody>
								{this.props.todos.map(todo => (
									<tr className='text-center' key={todo.id}>
										 <td>{todo.email}</td>
										 <td>{todo.username}</td>
										 <td style={{
													textDecoration: todo.completed ? "line-through" : "none"
											 }}>
												{todo.text} {todo.completed === true ? "(completed)" : ""}
										 </td>
										 <td>
                    <span
											className="fas fa-minus-circle"
											onClick={() => this.props.deleteTodo(todo.id)}
											style={{
												 color: "black",
												 fontSize: "20pt",
												 marginRight: "20px"
											}}
										/>
												<span
													className="fas fa-check-circle"
													onClick={() => this.props.toggleTodo(todo.id)}
													style={{color: "black", fontSize: "20pt"}}
												/>
										 </td>
									</tr>
								))}
								</tbody>
						 </table>) :
						 (<div style={{marginTop: "50px"}} className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1">
								<div className="alert alert-danger" role="alert">
									 Todo List is empty or Filter results show no results
								</div>
						 </div>)}
				</div>
			);
	 }
}

const mapStateToProps = state => {
	 return {
			todos: state.todos
	 }
};

export default connect(mapStateToProps, {deleteTodo, toggleTodo})(Table);
