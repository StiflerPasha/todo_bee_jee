import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/actionCreator'
import * as axios from "axios";

class CreateTodo extends Component {
	 constructor(props) {
			super(props);
			this.state = {
				 text: '',
				 username: '',
				 email: ''
			};
			this.onChangeTodoText = this.onChangeTodoText.bind(this)
	 }

	 componentDidMount() {
			axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Pasha')
			.then(response => {
				 this.props.addTodo(response.data.message.tasks);
				 console.log(response.data.message.tasks)
			});
	 }

	 onChangeTodoText(e) {
			let state = this.state;
			state[e.target.name] = e.target.value;
			this.setState(state);
	 }

	 handleSubmit(e) {
			e.preventDefault();
			let state = this.state;
			this.props.addTodo([state]);
			this.setState({text: ""})
	 }

	 render() {
			return (
				<form onSubmit={this.handleSubmit.bind(this)}
							className="form-group">
					 <div className="col-sm-5">
							<div className="input-group input-group-sm mb-3">
								 <div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
								 </div>
								 <input
									 name='email'
									 onChange={this.onChangeTodoText}
									 value={this.state.email}
									 type="text"
									 className="form-control"/>
							</div>
							<div className="input-group input-group-sm mb-3">
								 <div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-sm">User</span>
								 </div>
								 <input
									 name='username'
									 onChange={this.onChangeTodoText}
									 value={this.state.username}
									 type="text"
									 className="form-control"/>
							</div>
							<div className="input-group mb-3">
								 <div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-sm">Task</span>
								 </div>
								 <input
									 name='text'
									 onChange={this.onChangeTodoText}
									 value={this.state.text}
									 type="text"
									 className="form-control"/>
							</div>



							<button type="button"
											onClick={() => this.setState({text: ''})}
											style={{marginRight: "15px"}}
											className="btn btn-danger">Cancel
							</button>
							<button type="submit"
											className="btn btn-success">Add Task
							</button>
					 </div>
				</form>
			);
	 }
}

export default connect(null, {addTodo})(CreateTodo)